import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { BaseResourceForm } from 'src/app/shared/components/base-resource-form/base-resource-form';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent extends BaseResourceForm<Category> {

  constructor(
    protected injector: Injector,
    protected categoryService: CategoryService
  ) {
    super(
      categoryService,
      injector,
      new Category,
      Category.jsonFromCategory,
      ['disciplinas'],
      'Disciplina'
    )
   }
  
  buildForm(){
    this.resourceForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      description: ['']
    })
  }

}
