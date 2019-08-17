import { Component, OnInit, Injector } from '@angular/core';

import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list';
import { Quiz } from '../quiz/models/quiz';
import { QuizService } from '../quiz/services/quiz.service';
import { ResponseService } from 'src/app/shared/services/response.service';
import { Observable } from 'rxjs';
import { Response } from 'src/app/shared/models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseResourceList<Quiz> {

  responses$: Observable<Response[]>;

  constructor(
    protected quizService: QuizService,
    protected injector: Injector,
    private responseService: ResponseService
  ) {
    super(
      quizService,
      injector
    )
   }

   ngOnInit(){
     this.responses$ = this.responseService.getAll();

     super.ngOnInit();
   }


}
