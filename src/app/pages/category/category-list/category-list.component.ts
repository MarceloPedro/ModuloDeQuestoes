import { Component, Injector } from '@angular/core';

import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends BaseResourceList<Category>{

  constructor(
    protected categoryService: CategoryService,
    protected injector: Injector
    ) { 
      super(
        categoryService,
        injector
        )
    }

}
