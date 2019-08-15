import { OnInit, Injector } from '@angular/core';

import { Observable, Subject, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';
import { BaseResourceModel } from '../../models/base-resource-model';
import { BaseResourceService } from '../../services/base-resource-service';

export abstract class BaseResourceList <T extends BaseResourceModel> implements OnInit {

    resources$: Observable<T[]>;
    errors$: Subject<boolean> = new Subject<boolean>();
    toastr: ToastrService;

  constructor(
    protected resourceService: BaseResourceService<T>,
    protected injector: Injector
    ) {
        this.toastr = injector.get(ToastrService);
     }

  ngOnInit() {
    this.loadResource();
  }

  
//PROTECTED METHODS

protected loadResource(){
    this.resources$ = this.resourceService.getAll()
      .pipe(
        catchError(error => {
          this.actionForError('Erro ao tentar carregar os recursos')
          this.errors$.next(true)
          return EMPTY;
        })
      )
    
  }

 protected actionForError(msg: string){
    this.toastr.error(msg);
  }

}
