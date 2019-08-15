import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', loadChildren: './pages/category/category.module#CategoryModule'},
  {path: 'quizzes', loadChildren: './pages/quiz/quiz.module#QuizModule'},
  {path: 'questions', loadChildren: './pages/question/question.module#QuestionModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
