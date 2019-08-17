import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartQuizComponent } from './start-quiz/start-quiz.component';

const routes: Routes = [
  {path: ':id', component: StartQuizComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartTestRoutingModule { }
