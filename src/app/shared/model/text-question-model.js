"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_model_1 = require("./question-model");
var question_type_1 = require("./question-type");
var validation_model_1 = require("./validation-model");
var TextQuestionModel = (function (_super) {
    __extends(TextQuestionModel, _super);
    function TextQuestionModel() {
        _super.call(this, question_type_1.QuestionType.Text);
    }
    TextQuestionModel.prototype.populateFromFormGroup = function (formGroup) {
        if (formGroup.get("label").value != null) {
            this.questionLabel = formGroup.get("label").value;
        }
        if (formGroup.get("defaultValue").value != null) {
            this.defaultValue = formGroup.get("defaultValue").value;
        }
        if (formGroup.get("placeHolder").value != null) {
            this.placeHolder = formGroup.get("placeHolder").value;
        }
        if (formGroup.get("validations").value != null) {
            if (formGroup.get("validations").get("minimumLengthValidation").value != null) {
                var minimumLengthValidation = this.validations.find(function (validation) { return validation.validationType === 1 /* MinimumLength */; });
                if (minimumLengthValidation != null) {
                    minimumLengthValidation.values = Array.of([formGroup.get("validations").get("minimumLengthValidation").value]);
                }
                else {
                    this.validations.push(new validation_model_1.ValidationModel(1 /* MinimumLength */, [formGroup.get("validations").get("minimumLengthValidation").value]));
                }
            }
            if (formGroup.get("validations").get("maximumLengthValidation").value != null) {
                var maximumLengthValidation = this.validations.find(function (validation) { return validation.validationType === 2 /* MaximumLength */; });
                if (maximumLengthValidation != null) {
                    maximumLengthValidation.values = Array.of([formGroup.get("validations").get("maximumLengthValidation").value]);
                }
                else {
                    this.validations.push(new validation_model_1.ValidationModel(2 /* MaximumLength */, [formGroup.get("validations").get("maximumLengthValidation").value]));
                }
            }
        }
    };
    TextQuestionModel.prototype.toFormGroup = function (fb) {
        var minimumLengthValidation = this.validations.find(function (validation) { return validation.validationType === 1 /* MinimumLength */; });
        var maximumLengthValidation = this.validations.find(function (validation) { return validation.validationType === 2 /* MaximumLength */; });
        return fb.group({
            label: typeof this.questionLabel != 'undefined' && this.questionLabel ? this.questionLabel : "",
            defaultValue: typeof this.defaultValue != 'undefined' && this.defaultValue ? this.defaultValue : "",
            placeHolder: typeof this.placeHolder != 'undefined' && this.placeHolder ? this.placeHolder : "",
            validations: fb.group({
                minimumLengthValidation: typeof minimumLengthValidation != 'undefined' && minimumLengthValidation.values[0] ? minimumLengthValidation.values[0] : '',
                maximumLengthValidation: typeof maximumLengthValidation != 'undefined' && maximumLengthValidation.values[0] ? maximumLengthValidation.values[0] : ''
            })
        });
    };
    return TextQuestionModel;
}(question_model_1.QuestionModel));
exports.TextQuestionModel = TextQuestionModel;
//# sourceMappingURL=text-question-model.js.map