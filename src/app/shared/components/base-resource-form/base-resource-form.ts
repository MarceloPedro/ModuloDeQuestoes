import { OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { switchMap, catchError } from 'rxjs/operators';


import { ToastrService } from 'ngx-toastr';
import { BaseResourceModel } from '../../models/base-resource-model';
import { BaseResourceService } from '../../services/base-resource-service';


export abstract class BaseResourceForm <T extends BaseResourceModel> implements OnInit {

  resourceForm: FormGroup;
  setAction: string;

  formBuilder: FormBuilder;
  router: Router;
  route: ActivatedRoute;
  toastr: ToastrService;

  constructor(
    protected resourceService: BaseResourceService<T>,
    protected injector: Injector,
    protected resource: T,
    protected jsonFromResource: (json: any) => T,
    protected redirectUrl: string[],
    protected txtName: string
  ) {
    this.formBuilder = this.injector.get(FormBuilder);
    this.router = this.injector.get(Router);
    this.route = this.injector.get(ActivatedRoute);
    this.toastr = this.injector.get(ToastrService);
   }

  ngOnInit() {
    this.buildForm();
    this.actionForm();
    this.loadForm()
    
  }


  submitForm(){
    if(this.setAction == 'edit'){
      return this.update();
    }
    return this.register();
  } 
  
  loadForm(){
    if(this.setAction == 'edit'){
        this.route.paramMap.pipe(
          switchMap(params => this.resourceService.getById(+params.get('id')))
        ).subscribe(
          resource => {
            this.resource = resource
            this.resourceForm.patchValue(this.resource)
          },
          error => console.log(error)
          
        )
    }
  }


  register(){
    this.resourceService.create(this.resourceForm.value)
      .subscribe(
        category => 
          this.actionForSuccess(
            `${this.txtName} cadastrado com sucesso!`,
              this.redirectUrl
          ),
        error => {
          this.actionForError(`Erro ao tentar cadastrar a ${this.txtName}`)
          catchError(error)
        }
        
      )
  }


  update(){
    const resource = Object.assign(this.resource, this.resourceForm.value)

    this.resourceService.update(resource)
      .subscribe(
        () => {
          this.actionForSuccess(
            `${this.txtName} atualizado com sucesso!`,
            this.redirectUrl
          ),
        error => {
          this.actionForError(`Erro ao tentar atualizar ${this.txtName}`)
          catchError(error)
        }
        }
    )
  }


  //PROTECTED METHODS

  protected actionForm(){
    if(this.route.snapshot.url[0].path == 'new'){
        return this.setAction = 'new';
    }
    return this.setAction = 'edit';
  }

  protected actionForSuccess(msg: string, url: string[]){
    this.toastr.success(msg);
    if(url != null){

      this.router.navigate(url);
    }
  }

  protected actionForError(msg: string){
    this.toastr.error(msg);
  }

  protected isTouchedAndValid(formName: string): boolean{
    return this.resourceForm.get(formName).touched && this.resourceForm.get(formName).valid;
  }

  protected isInvalidAndTouched(formName: string): boolean{
    return !this.resourceForm.get(formName).valid && this.resourceForm.get(formName).touched;
  }


  abstract buildForm();

}
