import { Component, OnInit,Input,EventEmitter,Output  } from '@angular/core';
import {AddQuestionsService} from "../../shared/services/add-questions.service";
import {CheckboxQuestionModel} from "../../shared/checkbox-question-model"

@Component({
  selector: 'app-checkbox-question',
  templateUrl: 'app/questions/checkbox-question/checkbox-question.component.html',
  styleUrls: ['app/questions/checkbox-question/checkbox-question.component.css']
})
export class CheckboxQuestionComponent implements OnInit {
  addQuestionsService:AddQuestionsService;

  isDisplayTabOn:boolean=true;
  isValidationTabOn:boolean=false;
  checkboxQuestionModel:CheckboxQuestionModel;
  @Input() displayCheckBoxFieldDialog:boolean;
  @Output() onClose=new EventEmitter();
  constructor(private theAddQuestionsService:AddQuestionsService) {
    this.addQuestionsService=theAddQuestionsService;
    this.checkboxQuestionModel= new CheckboxQuestionModel("Label");
  }

  ngOnInit() {
  }

  onCheckBoxFieldTabClick(tabName:string){
    if(tabName==='Display'){
      this.isDisplayTabOn=true;
      this.isValidationTabOn=false;
    }
    else if(tabName==='Validations'){
      this.isValidationTabOn=true;
      this.isDisplayTabOn=false;
    }
  }
  onCheckBoxFieldSave(){
    this.addQuestionsService.addQuestionModel(this.checkboxQuestionModel);
    this.checkboxQuestionModel= new CheckboxQuestionModel("Label");
    this.onClose.emit();
  }
}
