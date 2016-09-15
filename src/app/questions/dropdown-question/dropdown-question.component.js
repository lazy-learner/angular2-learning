"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var dropdown_question_model_1 = require("../../shared/model/dropdown-question-model");
var DropdownQuestionComponent = (function () {
    function DropdownQuestionComponent(theAddQuestionsService, formBuilder) {
        this.theAddQuestionsService = theAddQuestionsService;
        this.formBuilder = formBuilder;
        this.isDisplayTabOn = true;
        this.isValidationTabOn = false;
        this.dropDownQuestionModel = new dropdown_question_model_1.DropdownQuestionModel();
        this.onClose = new core_1.EventEmitter();
    }
    DropdownQuestionComponent.prototype.ngOnInit = function () {
        this.dropDownFieldForm = this.dropDownQuestionModel.toFormGroup(this.formBuilder);
    };
    DropdownQuestionComponent.prototype.onDropDownFieldTabClick = function (tabName) {
        if (tabName === 'Display') {
            this.isDisplayTabOn = true;
            this.isValidationTabOn = false;
        }
        else if (tabName === 'Validations') {
            this.isValidationTabOn = true;
            this.isDisplayTabOn = false;
        }
    };
    DropdownQuestionComponent.prototype.onDropDownFieldSave = function () {
        this.dropDownQuestionModel.populateFromFormGroup(this.dropDownFieldForm);
        this.theAddQuestionsService.addQuestionModel(this.dropDownQuestionModel);
        this.onClose.emit();
    };
    DropdownQuestionComponent.prototype.onDropDownFieldClose = function () {
        this.onClose.emit();
    };
    DropdownQuestionComponent.prototype.addOption = function () {
        this.dropDownQuestionModel.options.push({ label: "Label", value: "Value" });
        console.log("....sss.." + this.dropDownQuestionModel.options[this.dropDownQuestionModel.options.length - 1].label);
        var optionsArray = this.dropDownFieldForm.controls['options'];
        optionsArray.push(this.dropDownQuestionModel.createOptionFormGroup(this.dropDownQuestionModel.options.pop(), this.formBuilder));
    };
    DropdownQuestionComponent.prototype.deleteOption = function (atIndex) {
        this.dropDownQuestionModel.options.splice(atIndex, 1);
        var optionsArray = this.dropDownFieldForm.controls['options'];
        optionsArray.removeAt(atIndex);
    };
    __decorate([
        core_1.Input()
    ], DropdownQuestionComponent.prototype, "displayCheckBoxFieldDialog", void 0);
    __decorate([
        core_1.Output()
    ], DropdownQuestionComponent.prototype, "onClose", void 0);
    DropdownQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-dropdown-question',
            templateUrl: 'app/questions/dropdown-question/dropdown-question.component.html',
            styleUrls: ['app/questions/dropdown-question/dropdown-question.component.css']
        })
    ], DropdownQuestionComponent);
    return DropdownQuestionComponent;
}());
exports.DropdownQuestionComponent = DropdownQuestionComponent;
//# sourceMappingURL=dropdown-question.component.js.map