"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_model_1 = require("./question-model");
var question_type_1 = require("./question-type");
var validation_model_1 = require("./validation-model");
var DropdownQuestionModel = (function (_super) {
    __extends(DropdownQuestionModel, _super);
    function DropdownQuestionModel() {
        _super.call(this, question_type_1.QuestionType.DropDown);
        this.options = [{ label: "Label", value: "Value" }];
    }
    DropdownQuestionModel.prototype.populateFromFormGroup = function (formGroup) {
        if (formGroup.get("label").value != null) {
            this.questionLabel = formGroup.get("label").value;
        }
        this.options.splice(0);
        var optionsArray = formGroup.controls['options'];
        for (var _i = 0; _i < optionsArray.length; _i++) {
            this.options.push({ label: optionsArray.at(_i).get("Label").value, value: optionsArray.at(_i).get("Value").value });
        }
        if (formGroup.get("validations").value != null) {
            if (formGroup.get("validations").get("requiredValidation").value != null) {
                var requiredValidation = this.validations.find(function (validation) { return validation.validationType === 0 /* Required */; });
                if (requiredValidation != null) {
                    requiredValidation.values = Array.of([formGroup.get("validations").get("requiredValidation").value]);
                }
                else {
                    this.validations.push(new validation_model_1.ValidationModel(0 /* Required */, [formGroup.get("validations").get("requiredValidation").value]));
                }
            }
        }
    };
    DropdownQuestionModel.prototype.createOptionFormGroup = function (option, fb) {
        return fb.group({
            Label: option.label,
            Value: option.value
        });
    };
    DropdownQuestionModel.prototype.toFormGroup = function (fb) {
        var _this = this;
        var requiredValidation = this.validations.find(function (validation) { return validation.validationType === 0 /* Required */; });
        var formGroup = fb.group({
            label: typeof this.questionLabel != 'undefined' && this.questionLabel ? this.questionLabel : "",
            options: fb.array([]),
            validations: fb.group({
                requiredValidation: typeof requiredValidation != 'undefined' && requiredValidation.values[0] ? requiredValidation.values[0] : ''
            })
        });
        this.options.forEach(function (option) {
            var optionsArray = formGroup.controls['options'];
            optionsArray.push(_this.createOptionFormGroup(option, fb));
        });
        return formGroup;
    };
    return DropdownQuestionModel;
}(question_model_1.QuestionModel));
exports.DropdownQuestionModel = DropdownQuestionModel;
//# sourceMappingURL=dropdown-question-model.js.map