"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var radiogroup_question_model_1 = require("../../shared/model/radiogroup-question-model");
var RadioGroupQuestionComponent = (function () {
    function RadioGroupQuestionComponent(theAddQuestionsService, formBuilder) {
        this.theAddQuestionsService = theAddQuestionsService;
        this.formBuilder = formBuilder;
        this.isDisplayTabOn = true;
        this.isValidationTabOn = false;
        this.radioGroupQuestionModel = new radiogroup_question_model_1.RadioGroupQuestionModel();
        this.onClose = new core_1.EventEmitter();
    }
    RadioGroupQuestionComponent.prototype.ngOnInit = function () {
        this.radioGroupForm = this.radioGroupQuestionModel.toFormGroup(this.formBuilder);
    };
    RadioGroupQuestionComponent.prototype.onRadioGroupTabClick = function (tabName) {
        if (tabName === 'Display') {
            this.isDisplayTabOn = true;
            this.isValidationTabOn = false;
        }
        else if (tabName === 'Validations') {
            this.isValidationTabOn = true;
            this.isDisplayTabOn = false;
        }
    };
    RadioGroupQuestionComponent.prototype.onRadioGroupFieldSave = function () {
        this.radioGroupQuestionModel.populateFromFormGroup(this.radioGroupForm);
        this.theAddQuestionsService.addQuestionModel(this.radioGroupQuestionModel);
        this.onClose.emit();
    };
    RadioGroupQuestionComponent.prototype.onRadioGroupFieldClose = function () {
        this.onClose.emit();
    };
    RadioGroupQuestionComponent.prototype.addOption = function () {
        this.radioGroupQuestionModel.options.push({ label: "Label", value: "Value" });
        var optionsArray = this.radioGroupForm.controls['options'];
        optionsArray.push(this.radioGroupQuestionModel.createOptionFormGroup(this.radioGroupQuestionModel.options.pop(), this.formBuilder));
    };
    RadioGroupQuestionComponent.prototype.deleteOption = function (atIndex) {
        this.radioGroupQuestionModel.options.splice(atIndex, 1);
        var optionsArray = this.radioGroupForm.controls['options'];
        optionsArray.removeAt(atIndex);
    };
    __decorate([
        core_1.Output()
    ], RadioGroupQuestionComponent.prototype, "onClose");
    RadioGroupQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-radio-group-question',
            templateUrl: 'app/questions/radio-group-question/radio-group-question.component.html',
            styleUrls: ['app/questions/radio-group-question/radio-group-question.component.css']
        })
    ], RadioGroupQuestionComponent);
    return RadioGroupQuestionComponent;
}());
exports.RadioGroupQuestionComponent = RadioGroupQuestionComponent;
//# sourceMappingURL=radio-group-question.component.js.map