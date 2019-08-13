import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  resources$: Observable<Category[]>;

  constructor(
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.loadResource();
  }

  loadResource(){
    this.resources$ = this.categoryService.getAll()
    
  }

}
