import { Component, OnInit,Input,EventEmitter,Output  } from '@angular/core';
import {AddQuestionsService} from "../../shared/services/add-questions.service";
import {TextQuestionModel} from "../../shared/text-question-model";

@Component({
  selector: 'app-textfield-question',
  templateUrl: 'app/questions/textfield-question/textfield-question.component.html',
  styleUrls: ['app/questions/textfield-question/textfield-question.component.css']
})
export class TextfieldQuestionComponent implements OnInit {

  addQuestionsService:AddQuestionsService;
  textQuestionModel:TextQuestionModel;
  isDisplayTabOn:boolean=true;
  isValidationTabOn:boolean=false;
  @Input() displayTextFieldDialog:boolean;
  @Output() onClose=new EventEmitter();

  constructor(private theAddQuestionsService:AddQuestionsService
  ) {
    this.addQuestionsService=theAddQuestionsService;
    this.textQuestionModel= new TextQuestionModel("");
  }

  ngOnInit() {
  }

  onTextFieldTabClick(tabName:string){
    if(tabName==='Display'){
      this.isDisplayTabOn=true;
      this.isValidationTabOn=false;
    }
    else if(tabName==='Validations'){
      this.isValidationTabOn=true;
      this.isDisplayTabOn=false;
    }
  }
  onTextFieldSave(){
    this.addQuestionsService.addTextQuestionModel(this.textQuestionModel);
    this.onClose.emit();
  }

}
