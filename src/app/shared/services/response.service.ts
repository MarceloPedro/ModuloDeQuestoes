import { BaseResourceService } from 'src/app/shared/services/base-resource-service';
import { Injectable, Injector } from '@angular/core';
import { Response } from '../models/response';
import { Observable } from 'rxjs';
import { QuizService } from 'src/app/pages/quiz/services/quiz.service';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseService extends BaseResourceService<Response>{

  constructor(
    protected injector: Injector,
    private quizService: QuizService
  ) { 
    super(
      injector,
      'api/responses'
    )
  }

  create(response: Response): Observable<Response>{    
    return this.quizService.getById(response.quiz_id)
    .pipe(
      flatMap(quiz => {
        response.quiz = quiz
          return super.create(response);
        })
      )
  }

}
