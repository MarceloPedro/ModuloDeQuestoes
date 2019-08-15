import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionFormComponent } from './question-form/question-form.component';

const routes: Routes = [
  {path: 'new', component: QuestionFormComponent},
  {path: ':id/edit', component: QuestionFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
