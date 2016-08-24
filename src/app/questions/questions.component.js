"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var text_question_model_1 = require("../shared/text-question-model");
var checkbox_question_model_1 = require("../shared/checkbox-question-model");
var QuestionsComponent = (function () {
    function QuestionsComponent(theAddQuestionsService) {
        this.theAddQuestionsService = theAddQuestionsService;
        this.displayCheckBoxFieldDialog = false;
        this.addQuestionsService = theAddQuestionsService;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent.prototype.dragTextFieldEnd = function (event) {
        console.log("text field got dragged");
        this.displayTextFieldDialog = true;
    };
    QuestionsComponent.prototype.closeTextFieldDialog = function () {
        this.displayTextFieldDialog = false;
    };
    QuestionsComponent.prototype.isTextField = function (questionModel) {
        if (questionModel instanceof text_question_model_1.TextQuestionModel) {
            return true;
        }
        return false;
    };
    QuestionsComponent.prototype.dragCheckBoxFieldEnd = function (event) {
        console.log("text field got dragged");
        this.displayCheckBoxFieldDialog = true;
    };
    QuestionsComponent.prototype.closeCheckBoxFieldDialog = function () {
        this.displayCheckBoxFieldDialog = false;
    };
    QuestionsComponent.prototype.isCheckBoxField = function (questionModel) {
        if (questionModel instanceof checkbox_question_model_1.CheckboxQuestionModel) {
            return true;
        }
        return false;
    };
    QuestionsComponent = __decorate([
        core_1.Component({
            selector: 'app-questions',
            templateUrl: 'app/questions/questions.component.html',
            styleUrls: ['app/questions/questions.component.css']
        })
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=questions.component.js.map