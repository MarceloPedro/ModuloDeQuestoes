import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoryFormComponent, 
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
