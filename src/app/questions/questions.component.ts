import { Component, OnInit } from '@angular/core';
import {AddQuestionsService} from "../shared/services/add-questions.service";
import {TextQuestionModel} from "../shared/text-question-model";
import {QuestionModel} from "../shared/question-model";

@Component({
  selector: 'app-questions',
  templateUrl: 'app/questions/questions.component.html',
  styleUrls: ['app/questions/questions.component.css']
})
export class QuestionsComponent implements OnInit {



  addQuestionsService:AddQuestionsService;
  textQuestionModel:TextQuestionModel;
  displayTextFieldDialog:boolean;
  constructor(private theAddQuestionsService:AddQuestionsService
  ) {
    this.addQuestionsService=theAddQuestionsService;
    this.textQuestionModel= new TextQuestionModel("");
  }

  ngOnInit() {
  }
  dragTextFieldEnd(event){
    console.log("text field got dragged");
    this.displayTextFieldDialog=true;

  }

  closeTextFieldDialog(){
    this.displayTextFieldDialog=false;
  }

  isTextField(questionModel:QuestionModel){
    if(questionModel instanceof TextQuestionModel){
      return true;
    }
    return false;
  }
}
