import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { BaseResourceForm } from 'src/app/shared/components/base-resource-form/base-resource-form';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../../quiz/services/quiz.service';
import { Quiz } from '../../quiz/models/quiz';
import { TypesResponseService } from 'src/app/shared/services/types-responses.service';
import { TypesResponse } from 'src/app/shared/models/types-response';
import { CategoryService } from '../../category/services/category.service';
import { Category } from '../../category/models/category';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent extends BaseResourceForm<Question> implements OnInit {

  quizzes$:Observable<Quiz[]>;
  typesResponse$:Observable<TypesResponse[]>;
  categories$:Observable<Category[]>;

  constructor(
    protected questionService: QuestionService,
    protected injector: Injector,
    private quizService: QuizService,
    private typesResponseService: TypesResponseService,
    private categoryService: CategoryService
  ) { 
    super(
      questionService,
      injector,
      new Question,
      Question.jsonFromQuestion,
      ['questions'],
      'Questão'
    )
  }

  ngOnInit() {
    this.buildForm();
    this.loadQuizzes();
    this.loadTypesResponse();
    this.loadCategories();

    super.ngOnInit();
  }

  buildForm(){
    this.resourceForm = this.formBuilder.group({
      title:['', Validators.required],
      description:['', [Validators.required, Validators.minLength(5)]],
      response:['', Validators.required],
      options:['', [Validators.required, Validators.minLength(2)]],
      points:['', [Validators.required, Validators.pattern(/^[1-9]\d*/g)]],
      category_id: ['', Validators.required],
      type_id:['', Validators.required],
      quiz_id:['', Validators.required]
    })
  }

  loadQuizzes(){
    this.quizzes$ = this.quizService.getAll();
  }

  loadTypesResponse(){
    this.typesResponse$ = this.typesResponseService.getAll();
  }

  loadCategories(){
    this.categories$ = this.categoryService.getAll().pipe(
      catchError(() => this.actionForError)
    )
  }

}
