"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_model_1 = require("./question-model");
var CheckboxQuestionModel = (function (_super) {
    __extends(CheckboxQuestionModel, _super);
    function CheckboxQuestionModel(theName) {
        _super.call(this, theName);
        this.defaultValue = false;
    }
    return CheckboxQuestionModel;
}(question_model_1.QuestionModel));
exports.CheckboxQuestionModel = CheckboxQuestionModel;
//# sourceMappingURL=checkbox-question-model.js.map