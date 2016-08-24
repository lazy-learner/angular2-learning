import {QuestionModel} from "./question-model";
import {ValidationModel} from "./validation-model";
export class CheckboxQuestionModel extends QuestionModel{
  public defaultValue:boolean=false;
  public validations:ValidationModel[];
  constructor(theName:string){
    super(theName);
  }
  
}
