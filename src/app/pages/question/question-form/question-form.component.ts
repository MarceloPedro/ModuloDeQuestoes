import { Component, OnInit, Injector, TemplateRef, Output, EventEmitter } from '@angular/core';
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
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent extends BaseResourceForm<Question> implements OnInit {

  modalRef: BsModalRef;
  questions: Question;
  @Output() eventQuestion = new EventEmitter();

  types: string[] = ['Múltipla Escolha', 'Seleção', 'Avaliação com Estrelas'];
  responses: string[] = [];

  constructor(
    protected questionService: QuestionService,
    protected injector: Injector,
    private modalService: BsModalService
  ) { 
    super(
      questionService,
      injector,
      new Question,
      Question.jsonFromQuestion,
      null,
      'Questão'
    )
  }

  ngOnInit() {
    this.buildForm();

    super.ngOnInit();
  }

  buildForm(){
    this.resourceForm = this.formBuilder.group({
      name:['', Validators.required],
      points: ['', Validators.required],
      type: ['', Validators.required],
      multi: [''],
      response: [''],
    })
  }

  
 /* loadCategories(){
    this.categories$ = this.categoryService.getAll().pipe(
      catchError(() => this.actionForError)
    )
  }*/

  pushResponse(value: string){
    if(value != '' && value != null){
      this.responses.push(value);
      this.resourceForm.get('multi').reset();
    console.log(this.responses);
    }
    
    this.questionService.getAll().subscribe(
      dados => console.log(dados)
      
    )
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
 
  confirm(): void {
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }


  cadastro(){
    this.confirm();
    if(this.resourceForm.get('type').value == 'Múltipla Escolha'){
      this.resourceForm.patchValue({
        response:[this.responses]
      })
    }
    
    this.responses = [];
    this.eventQuestion.emit(this.resourceForm.value);
    this.resourceForm.reset();
    
  }

}
