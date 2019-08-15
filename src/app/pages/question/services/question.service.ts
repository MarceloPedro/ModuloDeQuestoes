import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource-service';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseResourceService<Question> {

  constructor(
    protected injector: Injector
  ) { 
    super(
      injector,
      'api/questions'
    )
  }

}
