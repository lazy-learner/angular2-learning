"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var checkboxgroup_question_model_1 = require("../../shared/model/checkboxgroup-question-model");
var CheckboxGroupQuestionComponent = (function () {
    function CheckboxGroupQuestionComponent(theAddQuestionsService, formBuilder) {
        this.theAddQuestionsService = theAddQuestionsService;
        this.formBuilder = formBuilder;
        this.isDisplayTabOn = true;
        this.isValidationTabOn = false;
        this.checkBoxGroupQuestionModel = new checkboxgroup_question_model_1.CheckboxgroupQuestionModel();
        this.onClose = new core_1.EventEmitter();
    }
    CheckboxGroupQuestionComponent.prototype.ngOnInit = function () {
        this.checkBoxGroupForm = this.checkBoxGroupQuestionModel.toFormGroup(this.formBuilder);
    };
    CheckboxGroupQuestionComponent.prototype.onCheckBoxGroupTabClick = function (tabName) {
        if (tabName === 'Display') {
            this.isDisplayTabOn = true;
            this.isValidationTabOn = false;
        }
        else if (tabName === 'Validations') {
            this.isValidationTabOn = true;
            this.isDisplayTabOn = false;
        }
    };
    CheckboxGroupQuestionComponent.prototype.onCheckBoxGroupFieldSave = function () {
        this.checkBoxGroupQuestionModel.populateFromFormGroup(this.checkBoxGroupForm);
        this.theAddQuestionsService.addQuestionModel(this.checkBoxGroupQuestionModel);
        this.onClose.emit();
    };
    CheckboxGroupQuestionComponent.prototype.onCheckBoxGroupFieldClose = function () {
        this.onClose.emit();
    };
    CheckboxGroupQuestionComponent.prototype.addOption = function () {
        this.checkBoxGroupQuestionModel.options.push({ label: "Label", value: "Value" });
        var optionsArray = this.checkBoxGroupForm.controls['options'];
        optionsArray.push(this.checkBoxGroupQuestionModel.createOptionFormGroup(this.checkBoxGroupQuestionModel.options.pop(), this.formBuilder));
    };
    CheckboxGroupQuestionComponent.prototype.deleteOption = function (atIndex) {
        this.checkBoxGroupQuestionModel.options.splice(atIndex, 1);
        var optionsArray = this.checkBoxGroupForm.controls['options'];
        optionsArray.removeAt(atIndex);
    };
    __decorate([
        core_1.Output()
    ], CheckboxGroupQuestionComponent.prototype, "onClose", void 0);
    CheckboxGroupQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-checkbox-group-question',
            templateUrl: 'app/questions/checkbox-group-question/checkbox-group-question.component.html',
            styleUrls: ['app/questions/checkbox-group-question/checkbox-group-question.component.css']
        })
    ], CheckboxGroupQuestionComponent);
    return CheckboxGroupQuestionComponent;
}());
exports.CheckboxGroupQuestionComponent = CheckboxGroupQuestionComponent;
//# sourceMappingURL=checkbox-group-question.component.js.map