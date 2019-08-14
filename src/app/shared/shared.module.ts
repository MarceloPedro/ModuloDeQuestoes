import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ModalQuestionComponent } from './components/modal-question/modal-question.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    ModalQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BreadcrumbComponent,
    RouterModule,
    ModalQuestionComponent
  ]
})
export class SharedModule { }
