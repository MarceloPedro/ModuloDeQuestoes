import { Component, OnInit, Injector, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

import { BaseResourceForm } from 'src/app/shared/components/base-resource-form/base-resource-form';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';
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
  stars: Array<number> = [1, 2, 3, 4, 5];

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
      response: ['', Validators.required]
      
    })
  }

  loadForm(){}

  pushResponse(form: FormControl){
    if(form.value != '' || form.value != null){
      this.responses.push(form.value);
      form.reset();
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
 
  confirm(): void {
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
    this.resourceForm.reset();
  }

  resetForm(form: FormControl){
    if(form != null){
      form.reset();
      this.responses = [];
    }
  }

  pushQuestions(){
    this.confirm();
   if(this.resourceForm.get('type').value == this.types[0] && this.responses.length > 0){
      this.responses.push(this.resourceForm.get('response').value);
      this.resourceForm.patchValue({
      response: this.responses
    })
   }
      
    this.responses = [];
    this.eventQuestion.emit(this.resourceForm.value);
    this.resourceForm.reset();
  }

}
