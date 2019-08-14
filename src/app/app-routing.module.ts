import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'categories', loadChildren: './pages/category/category.module#CategoryModule'},
  {path: 'quizzes', loadChildren: './pages/quiz/quiz.module#QuizModule'},
  {path: 'questions', loadChildren: './pages/question/question.module#QuestionModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
