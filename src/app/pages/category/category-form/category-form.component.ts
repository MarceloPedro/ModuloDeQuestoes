import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  resourceForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }


  buildForm(){
    this.resourceForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      description: ['']
    })
  }

  register(){
    this.categoryService.create(this.resourceForm.value)
      .subscribe(
        category => {
          console.log(category)
          this.router.navigate(['categories'])
        }
        
      )
  }

}
