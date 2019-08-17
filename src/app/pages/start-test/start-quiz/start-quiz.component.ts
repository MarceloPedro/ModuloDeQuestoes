import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap, catchError } from 'rxjs/operators';

import { QuizService } from '../../quiz/services/quiz.service';
import { Quiz } from '../../quiz/models/quiz';
import { Question } from 'src/app/shared/components/question/models/question';
import { ResponseService } from 'src/app/shared/services/response.service';
import { Response } from 'src/app/shared/models/response';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  quiz: Quiz;
  questions: Question[] = []
  question: Question;
  page: number = 0;
  testForm: FormGroup;
  responses: string[] = [];
  finally: string;
  responsesFinally: Response = new Response;
  points: number = 0;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private responseService: ResponseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadQuiz();
    this.builForm();
  }
 
  builForm(){
    this.testForm = this.formBuilder.group({
      name:['', Validators.required],
      response: [''],
      quiz_id: [''],
      points: [''],
    })
  }

  loadQuiz(){
    this.route.paramMap.pipe(
      switchMap(params => this.quizService.getById(+params.get('id')))
    ).subscribe(
      quiz => {
        this.quiz = quiz
        this.questions = quiz.questions
        this.question = this.questions[0];
      },
      error => catchError(error)
    )
  }

  response(){
    this.points += this.question.points;
    this.question = this.questions[this.page+1];
    this.responses[this.page] = this.testForm.get('response').value;
    this.testForm.get('response').reset();
    this.page++;

    if(this.page >= this.questions.length){
      this.finally = 'Parabens, voce terminou o questionario.';

    }
  }

  register(){
    this.testForm.patchValue({
      response: this.responses,
      quiz_id: this.quiz.id,
      points: this.points
  })
    this.responseService.create(this.testForm.value).subscribe(
      () =>this.router.navigate([''])
    )
  }



}
