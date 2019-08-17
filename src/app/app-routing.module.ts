import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'disciplinas', loadChildren: './pages/category/category.module#CategoryModule'},
  {path: 'quizzes', loadChildren: './pages/quiz/quiz.module#QuizModule'},
  {path: 'test', loadChildren: './pages/start-test/start-test.module#StartTestModule'},
  
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
