import { Injectable, Injector } from '@angular/core';
import { flatMap } from 'rxjs/operators';

import { BaseResourceService } from 'src/app/shared/services/base-resource-service';
import { Question } from '../models/question';
import { QuizService } from '../../quiz/services/quiz.service';
import { Observable } from 'rxjs';
import { TypesResponseService } from 'src/app/shared/services/types-responses.service';
import { CategoryService } from '../../category/services/category.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseResourceService<Question> {

  constructor(
    protected injector: Injector,
    private quizService: QuizService,
    private typesResponseService: TypesResponseService,
    private categoryService: CategoryService
  ) { 
    super(
      injector,
      'api/questions'
    )
  }


  create(question: Question): Observable<Question>{
    return this.quizService.getById(question.quiz_id)
      .pipe(
        flatMap(quiz => {
          question.quiz = quiz
            return this.typesResponseService.getById(question.type_id)
            .pipe(
              flatMap(type => {
                question.type = type
                return this.categoryService.getById(question.category_id)
              })).pipe(
                flatMap(category => {
                  question.category = category
                  return super.create(question)
                })
              )
                
              })
      )
  }

  update(question: Question): Observable<Question>{
    return this.quizService.getById(question.quiz_id)
      .pipe(
        flatMap(quiz => {
          question.quiz = quiz
            return this.typesResponseService.getById(question.type_id)
            .pipe(
              flatMap(type => {
                question.type = type
                return this.categoryService.getById(question.category_id)
              })).pipe(
                flatMap(category => {
                  question.category = category
                  return super.update(question)
                })
              )
                
              })
      )
  }



}
