import { Injectable } from '@angular/core';
import {QuestionModel} from "../model/question-model";
import {TextQuestionModel} from "../model/text-question-model";

@Injectable()
export class AddQuestionsService {
  public question:QuestionModel[]=[];

  constructor() { }

  addQuestionModel(questionModel:QuestionModel){
    let existingQuestionIndex=this.question.findIndex(element=> element === questionModel);
    if(typeof existingQuestionIndex != "undefined" && existingQuestionIndex > -1){
      this.question.fill(questionModel,existingQuestionIndex,existingQuestionIndex);
    }
  else {
      this.question.push(questionModel);
    }
  }

  getQuestionLabels():string[]{
    let returnValue:string[]=[];
    this.question.forEach(qstn=>returnValue.push(qstn.questionLabel));
    return returnValue;
  }

}
