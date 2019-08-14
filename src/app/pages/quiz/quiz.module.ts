import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionModule } from '../question/question.module';

@NgModule({
  declarations: [
    QuizListComponent, 
    QuizFormComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    QuestionModule
  ]
})
export class QuizModule { }
