import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StartTestRoutingModule } from './start-test-routing.module';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    StartQuizComponent
  ],
  imports: [
    CommonModule,
    StartTestRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule.forRoot(),
    SharedModule
  ]
})
export class StartTestModule { }
