import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuestionListComponent, 
    QuestionFormComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class QuestionModule { }
