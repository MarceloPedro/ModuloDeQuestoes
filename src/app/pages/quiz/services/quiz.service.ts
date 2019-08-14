import { Injectable, Injector } from '@angular/core';
import { flatMap, catchError, map } from 'rxjs/operators'

import { BaseResourceService } from 'src/app/shared/services/base-resource-service';
import { Quiz } from '../models/quiz';
import { Observable } from 'rxjs';
import { CategoryService } from '../../category/services/category.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends BaseResourceService<Quiz> {

  constructor(
    protected injector: Injector,
    private categoryService: CategoryService
  ) { 
    super(
      injector,
      'api/quizzes'
    )
  }


}
