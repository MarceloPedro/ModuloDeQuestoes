import { Component, Injector } from '@angular/core';

import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent extends BaseResourceList<Question> {

  constructor(
    protected questionService: QuestionService,
    protected injector: Injector
  ) {
    super(
      questionService,
      injector
    )
   }

  
}
