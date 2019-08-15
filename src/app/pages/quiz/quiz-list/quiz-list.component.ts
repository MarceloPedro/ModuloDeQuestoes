import { Component, Injector } from '@angular/core';
import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent extends BaseResourceList<Quiz>{

  constructor(
    protected quizService: QuizService,
    protected injector: Injector
  ) {
    super(
      quizService,
      injector
    )
   }

}
