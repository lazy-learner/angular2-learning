/**
 * Created by md7030 on 8/17/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
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
import {TabPanel} from 'primeng/primeng';
import {AddQuestionsService} from "./shared/services/add-questions.service";
import {TextfieldQuestionComponent} from "./questions/textfield-question/textfield-question.component";
import {CheckboxQuestionComponent} from "./questions/checkbox-question/checkbox-question.component";

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,routing ],
  declarations: [ Calendar,AppComponent,FormDetailsComponent,Dropdown,QuestionsComponent,Draggable,Droppable,Dialog,TabView,TabPanel,
    TextfieldQuestionComponent,
    CheckboxQuestionComponent],
  providers: [
    FormService,
    AddQuestionsService

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
