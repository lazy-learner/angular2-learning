"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_model_1 = require("./question-model");
var question_type_1 = require("./question-type");
var validation_model_1 = require("./validation-model");
var CheckboxQuestionModel = (function (_super) {
    __extends(CheckboxQuestionModel, _super);
    function CheckboxQuestionModel() {
        _super.call(this, question_type_1.QuestionType.CheckBox);
        this.defaultValue = false;
    }
    CheckboxQuestionModel.prototype.populateFromFormGroup = function (formGroup) {
        if (formGroup.get("label").value != null) {
            this.questionLabel = formGroup.get("label").value;
        }
        if (formGroup.get("defaultValue").value != null) {
            this.defaultValue = formGroup.get("defaultValue").value;
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
    CheckboxQuestionModel.prototype.toFormGroup = function (fb) {
        var requiredValidation = this.validations.find(function (validation) { return validation.validationType === 0 /* Required */; });
        return fb.group({
            label: typeof this.questionLabel != 'undefined' && this.questionLabel ? this.questionLabel : "",
            defaultValue: typeof this.defaultValue != 'undefined' && this.defaultValue ? this.defaultValue : "",
            validations: fb.group({
                requiredValidation: typeof requiredValidation != 'undefined' && requiredValidation.values[0] ? requiredValidation.values[0] : ''
            })
        });
    };
    return CheckboxQuestionModel;
}(question_model_1.QuestionModel));
exports.CheckboxQuestionModel = CheckboxQuestionModel;
//# sourceMappingURL=checkbox-question-model.js.map