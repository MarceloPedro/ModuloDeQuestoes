import { Component, OnInit, Injector } from '@angular/core';

import { BaseResourceForm } from 'src/app/shared/components/base-resource-form/base-resource-form';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quiz.service';
import { Validators } from '@angular/forms';
import { CategoryService } from '../../category/services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../category/models/category';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent extends BaseResourceForm<Quiz> implements OnInit{

   categories$: Observable<Category[]>;

  constructor(
    protected injector: Injector,
    protected quizService: QuizService,
    private categoryService: CategoryService
  ) { 
    super(
      quizService,
      injector,
      new Quiz,
      Quiz.jsonFromQuiz,
      ['quizzes'],
      'Questionário'
    )
  }

  ngOnInit(){
    this.loadCategories();
    super.ngOnInit();
  }

  buildForm(){
    this.resourceForm = this.formBuilder.group({
      title:['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
    })
  }

  loadCategories(){
    this.categories$ = this.categoryService.getAll();
  }


}
