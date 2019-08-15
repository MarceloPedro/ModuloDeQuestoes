import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { QuestionModule } from './components/question/question.module';

@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    QuestionModule
  ],
  exports:[
    BreadcrumbComponent,
    RouterModule,
    QuestionModule
  ]
})
export class SharedModule { }
