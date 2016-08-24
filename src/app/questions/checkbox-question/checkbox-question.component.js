"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var checkbox_question_model_1 = require("../../shared/checkbox-question-model");
var CheckboxQuestionComponent = (function () {
    function CheckboxQuestionComponent(theAddQuestionsService) {
        this.theAddQuestionsService = theAddQuestionsService;
        this.isDisplayTabOn = true;
        this.isValidationTabOn = false;
        this.onClose = new core_1.EventEmitter();
        this.addQuestionsService = theAddQuestionsService;
        this.checkboxQuestionModel = new checkbox_question_model_1.CheckboxQuestionModel("Label");
    }
    CheckboxQuestionComponent.prototype.ngOnInit = function () {
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
        this.addQuestionsService.addQuestionModel(this.checkboxQuestionModel);
        this.checkboxQuestionModel = new checkbox_question_model_1.CheckboxQuestionModel("Label");
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