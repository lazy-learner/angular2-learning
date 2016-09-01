/**
 * Created by md7030 on 8/17/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { routing }        from './app.routing';
import { AppComponent }  from './app.component';

import {FormDetailsComponent} from "./form-details/form-details.component";
import {QuestionsComponent} from "./questions"
import {FormService} from "./shared/services/form.service";
import {Calendar} from 'primeng/primeng';
import {Dropdown} from "primeng/primeng";
import { Draggable } from 'primeng/primeng';
import { Droppable } from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';
import {TabView} from 'primeng/primeng';
import {TabPanel,RadioButton} from 'primeng/primeng';
import {AddQuestionsService} from "./shared/services/add-questions.service";
import {TextfieldQuestionComponent} from "./questions/textfield-question/textfield-question.component";
import {CheckboxQuestionComponent} from "./questions/checkbox-question/checkbox-question.component";
import {DropdownQuestionComponent} from "./questions/dropdown-question/dropdown-question.component";
import {RadioGroupQuestionComponent} from "./questions/radio-group-question/radio-group-question.component";
import {NumericValidator} from "./shared/Directives/numeric-validator"

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,routing,ReactiveFormsModule ],
  declarations: [ Calendar,AppComponent,FormDetailsComponent,Dropdown,QuestionsComponent,Draggable,Droppable,Dialog,TabView,TabPanel,
    TextfieldQuestionComponent,
    CheckboxQuestionComponent,
    NumericValidator,
    DropdownQuestionComponent,
    RadioGroupQuestionComponent,
    RadioButton],
  providers: [
    FormService,
    AddQuestionsService

  ],
  entryComponents:[TextfieldQuestionComponent,CheckboxQuestionComponent,DropdownQuestionComponent,RadioGroupQuestionComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
