import { Injectable } from '@angular/core';
import {QuestionModel} from "../question-model";
import {TextQuestionModel} from "../text-question-model";

@Injectable()
export class AddQuestionsService {
  public question:QuestionModel[]=[];

  constructor() { }

  addTextQuestionModel(textQuestionModel:TextQuestionModel){
      this.question.push(textQuestionModel);
  }

}
