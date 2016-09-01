"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var checkbox_question_model_1 = require("../../shared/model/checkbox-question-model");
var CheckboxQuestionComponent = (function () {
    function CheckboxQuestionComponent(theAddQuestionsService, formBuilder) {
        this.theAddQuestionsService = theAddQuestionsService;
        this.formBuilder = formBuilder;
        this.isDisplayTabOn = true;
        this.isValidationTabOn = false;
        this.checkboxQuestionModel = new checkbox_question_model_1.CheckboxQuestionModel();
        this.onClose = new core_1.EventEmitter();
    }
    CheckboxQuestionComponent.prototype.ngOnInit = function () {
        this.checkBoxFieldForm = this.checkboxQuestionModel.toFormGroup(this.formBuilder);
    };
    CheckboxQuestionComponent.prototype.onCheckBoxFieldTabClick = function (tabName) {
        if (tabName === 'Display') {
            this.isDisplayTabOn = true;
            this.isValidationTabOn = false;
        }
        else if (tabName === 'Validations') {
            this.isValidationTabOn = true;
            this.isDisplayTabOn = false;
        }
    };
    CheckboxQuestionComponent.prototype.onCheckBoxFieldSave = function () {
        this.checkboxQuestionModel.populateFromFormGroup(this.checkBoxFieldForm);
        console.log("this.textQuestionModel==" + this.checkboxQuestionModel.questionLabel);
        this.theAddQuestionsService.addQuestionModel(this.checkboxQuestionModel);
        this.onClose.emit();
    };
    __decorate([
        core_1.Input()
    ], CheckboxQuestionComponent.prototype, "displayCheckBoxFieldDialog");
    __decorate([
        core_1.Output()
    ], CheckboxQuestionComponent.prototype, "onClose");
    CheckboxQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-checkbox-question',
            templateUrl: 'app/questions/checkbox-question/checkbox-question.component.html',
            styleUrls: ['app/questions/checkbox-question/checkbox-question.component.css']
        })
    ], CheckboxQuestionComponent);
    return CheckboxQuestionComponent;
}());
exports.CheckboxQuestionComponent = CheckboxQuestionComponent;
//# sourceMappingURL=checkbox-question.component.js.map