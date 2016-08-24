import { Injectable } from '@angular/core';
import {QuestionModel} from "../question-model";
import {TextQuestionModel} from "../text-question-model";

@Injectable()
export class AddQuestionsService {
  public question:QuestionModel[]=[];

  constructor() { }

  addQuestionModel(questionModel:QuestionModel){
      this.question.push(questionModel);
  }

}
