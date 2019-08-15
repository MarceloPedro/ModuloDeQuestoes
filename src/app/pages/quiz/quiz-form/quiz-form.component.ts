import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { BaseResourceForm } from 'src/app/shared/components/base-resource-form/base-resource-form';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quiz.service';
import { CategoryService } from '../../category/services/category.service';
import { Category } from '../../category/models/category';
import { Question } from '../../question/models/question';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent extends BaseResourceForm<Quiz> implements OnInit{

   categories$: Observable<Category[]>;
   questions: Question[] = [];

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
      title:['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      category_id: ['', Validators.required],
      questions: ['', Validators.required]
    })
  }

  loadCategories(){
    this.categories$ = this.categoryService.getAll().pipe(
      catchError(() => this.actionForError)
    )
  }


  cadastro(evento){
    if(evento != '' || evento != null){
      this.questions.push(Object.assign(new Question, evento));
      this.resourceForm.patchValue({
        questions: this.questions
      })

    }
  }

  
}
