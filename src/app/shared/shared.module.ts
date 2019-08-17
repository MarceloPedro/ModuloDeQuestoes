import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { QuestionModule } from './components/question/question.module';
import { NumerForArrayPipe } from './pipes/numer-for-array.pipe';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NumerForArrayPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    QuestionModule
  ],
  exports:[
    BreadcrumbComponent,
    RouterModule,
    QuestionModule,
    NumerForArrayPipe
  ]
})
export class SharedModule { }
