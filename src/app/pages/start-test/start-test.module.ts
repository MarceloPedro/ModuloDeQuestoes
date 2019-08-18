import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StartTestRoutingModule } from './start-test-routing.module';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    StartQuizComponent
  ],
  imports: [
    CommonModule,
    StartTestRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class StartTestModule { }
