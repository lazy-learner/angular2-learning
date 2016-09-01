"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var text_question_model_1 = require("../shared/model/text-question-model");
var question_model_1 = require("../shared/model/question-model");
var textfield_question_component_1 = require("./textfield-question/textfield-question.component");
var question_type_1 = require("../shared/model/question-type");
var checkbox_question_component_1 = require("./checkbox-question/checkbox-question.component");
var dropdown_question_component_1 = require("./dropdown-question/dropdown-question.component");
var radio_group_question_component_1 = require("./radio-group-question/radio-group-question.component");
var QuestionsComponent = (function () {
    function QuestionsComponent(theAddQuestionsService, componentResolver, viewContainerRef) {
        this.theAddQuestionsService = theAddQuestionsService;
        this.componentResolver = componentResolver;
        this.viewContainerRef = viewContainerRef;
        this.displayCheckBoxFieldDialog = false;
        this.questionType = question_type_1.QuestionType;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent.prototype.dragComponentEnd = function (componentType, event) {
        this.createComponent(componentType);
    };
    QuestionsComponent.prototype.getSelectItemsArray = function (theQuestionModel) {
        var dropDownSelectItems = [];
        theQuestionModel.options.forEach(function (option) {
            dropDownSelectItems.push(option);
        });
        return dropDownSelectItems;
    };
    QuestionsComponent.prototype.deleteQuestion = function (atIndex) {
        this.theAddQuestionsService.question.splice(atIndex, 1);
    };
    QuestionsComponent.prototype.editQuestion = function (questionModel) {
        this.createComponent(questionModel);
    };
    QuestionsComponent.prototype.createComponent = function (option) {
        var componentType;
        var questionModel;
        console.log(option instanceof question_model_1.QuestionModel);
        console.log(option instanceof text_question_model_1.TextQuestionModel);
        if (typeof option === "number") {
            componentType = option;
        }
        if (option instanceof question_model_1.QuestionModel) {
            questionModel = option;
            componentType = option.questionType;
        }
        if (componentType === question_type_1.QuestionType.Text) {
            var factory = this.componentResolver.resolveComponentFactory(textfield_question_component_1.TextfieldQuestionComponent);
            var textFieldComponentRef_1 = this.dialogContainerRef.createComponent(factory, 0, this.viewContainerRef.injector);
            textFieldComponentRef_1.instance.onClose.subscribe(function () {
                textFieldComponentRef_1.destroy();
            });
            if (typeof questionModel != "undefined" && questionModel) {
                textFieldComponentRef_1.instance.textQuestionModel = questionModel;
            }
        }
        if (componentType === question_type_1.QuestionType.CheckBox) {
            var factory = this.componentResolver.resolveComponentFactory(checkbox_question_component_1.CheckboxQuestionComponent);
            var checkBoxFieldComponentRef_1 = this.dialogContainerRef.createComponent(factory, 0, this.viewContainerRef.injector);
            checkBoxFieldComponentRef_1.instance.onClose.subscribe(function () {
                checkBoxFieldComponentRef_1.destroy();
            });
            if (typeof questionModel != "undefined" && questionModel) {
                checkBoxFieldComponentRef_1.instance.checkboxQuestionModel = questionModel;
            }
        }
        if (componentType === question_type_1.QuestionType.DropDown) {
            var factory = this.componentResolver.resolveComponentFactory(dropdown_question_component_1.DropdownQuestionComponent);
            var dropDownFieldComponentRef_1 = this.dialogContainerRef.createComponent(factory, 0, this.viewContainerRef.injector);
            dropDownFieldComponentRef_1.instance.onClose.subscribe(function () {
                dropDownFieldComponentRef_1.destroy();
            });
            if (typeof questionModel != "undefined" && questionModel) {
                dropDownFieldComponentRef_1.instance.dropDownQuestionModel = questionModel;
            }
        }
        if (componentType === question_type_1.QuestionType.RadioGroup) {
            var factory = this.componentResolver.resolveComponentFactory(radio_group_question_component_1.RadioGroupQuestionComponent);
            var radioGroupComponentRef_1 = this.dialogContainerRef.createComponent(factory, 0, this.viewContainerRef.injector);
            radioGroupComponentRef_1.instance.onClose.subscribe(function () {
                radioGroupComponentRef_1.destroy();
            });
            if (typeof questionModel != "undefined" && questionModel) {
                radioGroupComponentRef_1.instance.radioGroupQuestionModel = questionModel;
            }
        }
    };
    __decorate([
        core_1.ViewChild('dialogComponent', { read: core_1.ViewContainerRef })
    ], QuestionsComponent.prototype, "dialogContainerRef");
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