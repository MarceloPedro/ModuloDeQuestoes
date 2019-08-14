import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Category } from '../models/category';
import { BaseResourceService } from 'src/app/shared/services/base-resource-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseResourceService<Category> {


  constructor(
    protected injector: Injector
  ) { 
    super(
      injector,
      'api/categories'
    )
  }


 

}
