import {QuestionModel} from "./question-model";
import {QuestionType} from "./question-type";
import {ValidationType} from "./validation-type";
import {ValidationModel} from "./validation-model";
import {FormGroup,FormBuilder,Validators,FormControl,FormArray} from '@angular/forms';
export class RadioGroupQuestionModel extends QuestionModel{
  public options:{label:string,value:string}[]=[{label:"Label",value:"Value"}];
  constructor(){
    super(QuestionType.RadioGroup);
  }

  populateFromFormGroup(formGroup:FormGroup){
    if(formGroup.get("label").value !=null)
    {
      this.questionLabel=formGroup.get("label").value;
    }
    this.options.splice(0);
    let optionsArray=<FormArray>formGroup.controls['options'];
    for(var _i=0;_i<optionsArray.length;_i++ ){
      this.options.push({label:(<FormControl>optionsArray.at(_i)).get("Label").value,value:(<FormControl>optionsArray.at(_i)).get("Value").value});
    }
    if(formGroup.get("validations").value !=null)
    {
      if(formGroup.get("validations").get("requiredValidation").value !=null)
      {
        let requiredValidation=this.validations.find(validation=>validation.validationType===ValidationType.Required);
        if(requiredValidation!=null){
          requiredValidation.values=Array.of([formGroup.get("validations").get("requiredValidation").value]);
        }
        else{
          this.validations.push(new ValidationModel(ValidationType.Required,[formGroup.get("validations").get("requiredValidation").value]));
        }
      }
    }
  }



  createOptionFormGroup(option:{label:string,value:string},fb:FormBuilder):FormGroup{

    return fb.group({
        Label:option.label,
        Value:option.value
      }
    );
  }

  toFormGroup(fb:FormBuilder ):FormGroup{

    let requiredValidation=this.validations.find(validation=>validation.validationType===ValidationType.Required);
    let formGroup:FormGroup= fb.group({
      label:typeof this.questionLabel != 'undefined' && this.questionLabel?this.questionLabel:"",
      options:fb.array([]),
      validations:fb.group(
        {
          requiredValidation:typeof requiredValidation != 'undefined' && requiredValidation.values[0]?requiredValidation.values[0]:'',
        }
      )
    });
    this.options.forEach(option=>{
      let optionsArray=<FormArray>formGroup.controls['options'];
      optionsArray.push(this.createOptionFormGroup(option,fb))
    });
    return formGroup;
  }
}
