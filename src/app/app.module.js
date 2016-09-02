"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by md7030 on 8/17/2016.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var form_details_component_1 = require("./form-details/form-details.component");
var questions_1 = require("./questions");
var form_service_1 = require("./shared/services/form.service");
var primeng_1 = require('primeng/primeng');
var primeng_2 = require("primeng/primeng");
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var primeng_6 = require('primeng/primeng');
var primeng_7 = require('primeng/primeng');
var add_questions_service_1 = require("./shared/services/add-questions.service");
var textfield_question_component_1 = require("./questions/textfield-question/textfield-question.component");
var checkbox_question_component_1 = require("./questions/checkbox-question/checkbox-question.component");
var dropdown_question_component_1 = require("./questions/dropdown-question/dropdown-question.component");
var radio_group_question_component_1 = require("./questions/radio-group-question/radio-group-question.component");
var numeric_validator_1 = require("./shared/Directives/numeric-validator");
var unique_value_validator_1 = require("./shared/Directives/unique-value-validator");
var checkbox_group_question_component_1 = require("./questions/checkbox-group-question/checkbox-group-question.component");
var at_least_one_validator_1 = require("./shared/Directives/at-least-one-validator");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule, app_routing_1.routing, forms_1.ReactiveFormsModule],
            declarations: [primeng_1.Calendar, app_component_1.AppComponent, form_details_component_1.FormDetailsComponent, primeng_2.Dropdown, questions_1.QuestionsComponent, primeng_3.Draggable, primeng_4.Droppable, primeng_5.Dialog, primeng_6.TabView, primeng_7.TabPanel,
                textfield_question_component_1.TextfieldQuestionComponent,
                checkbox_question_component_1.CheckboxQuestionComponent,
                numeric_validator_1.NumericValidator,
                dropdown_question_component_1.DropdownQuestionComponent,
                radio_group_question_component_1.RadioGroupQuestionComponent,
                primeng_7.RadioButton,
                checkbox_group_question_component_1.CheckboxGroupQuestionComponent,
                unique_value_validator_1.UniqueValueValidator,
                at_least_one_validator_1.AtLeastOneValidator],
            providers: [
                form_service_1.FormService,
                add_questions_service_1.AddQuestionsService
            ],
            entryComponents: [textfield_question_component_1.TextfieldQuestionComponent, checkbox_question_component_1.CheckboxQuestionComponent, dropdown_question_component_1.DropdownQuestionComponent, radio_group_question_component_1.RadioGroupQuestionComponent, checkbox_group_question_component_1.CheckboxGroupQuestionComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map