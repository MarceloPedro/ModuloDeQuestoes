import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionFormComponent } from './question-form/question-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    QuestionFormComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    QuestionRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports:[
    QuestionFormComponent
  ]
})
export class QuestionModule { }
