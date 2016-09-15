///<reference path="../typings/globals/jasmine/index.d.ts"/>
import { AddQuestionsPage } from './app.po';
import {TextFieldQuestionComponentPage} from "./textfield-question.po";

describe('Dynamic Form Builder App', function() {
  let page: AddQuestionsPage;

  beforeEach(() => {
    page = new AddQuestionsPage();
    page.navigateTo();
  });

  xit('should display correct page Title on Add Questions page', () => {
      expect(page.getPageTitle()).toEqual('Add Questions');
  });


});

describe('Text Field component:', function() {
  let page: AddQuestionsPage=new AddQuestionsPage();
  page.navigateTo();
  let textFieldPage:TextFieldQuestionComponentPage=
    new TextFieldQuestionComponentPage();

   it('text field dialog should have correct title', () => {

    page.openTextFieldDialog();
    expect(textFieldPage.getDialogTitle()).toEqual('Add a Text Component');
  });

  it('should able to create a text field successfully', () => {
    textFieldPage.createANewOrEditTextField({label:"label",
      defaultValue:"defaultValue",
      placeHolder:"placeHolder",
      minimumLengthValidation:"1",
      maximumLengthValidation:"10"});
    expect(page.getTheLabelOfFirstComponent()).toEqual('label');
  });
  it('should able to edit a text field successfully', () => {
    page.editFirstComponent();
    textFieldPage.createANewOrEditTextField({label:"label_modified"});
    expect(page.getTheLabelOfFirstComponent()).toEqual('label_modified');
  });

  it('should able to delete a text field successfully', () => {

    page.deleteFirstComponenet();
    expect(page._firstCreatedComponent.isPresent()).toBe(false);
  });
});
