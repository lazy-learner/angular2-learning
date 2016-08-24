import {QuestionModel} from "./question-model";
import {ValidationModel} from "./validation-model";
export class TextQuestionModel extends QuestionModel{
  public defaultValue:string;
  public placeHolder:string;
  public validations:ValidationModel[];
  constructor(theName:string){
    super(theName);
  }
}
