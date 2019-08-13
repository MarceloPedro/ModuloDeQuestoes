import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

   urlAPI = 'api/categories';

  constructor(private http: HttpClient) { }


  getById(id: number): Observable<Category>{
    return this.http.get(`${this.urlAPI}/${id}`)
    .pipe(
      catchError(this.handleError),
      map(this.jsonToCategory)
    )
  }

  getAll(): Observable<Category[]>{
    return this.http.get(this.urlAPI)
      .pipe(
        catchError(this.handleError),
        map(this.jsonToCategories)
    )
  }


  create(category: Category): Observable<Category>{
    return this.http.post(this.urlAPI, category)
      .pipe(
        catchError(this.handleError),
        map(this.jsonToCategory)
    )
  }

  update(category: Category): Observable<Category>{
    return this.http.put(`${this.urlAPI}/${category.id}`, category)
      .pipe(
        catchError(this.handleError),
        map(() => category)
    )
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.urlAPI}/${id}`)
      .pipe(
        catchError(this.handleError),
        map(() => null)
      )
  }



  //PRIVATE METHODS

  private handleError(error: any): Observable<any>{
    return throwError(error);
  }

  private jsonToCategory(json: any): Category{
    return Object.assign(new Category, json);
  }

  private jsonToCategories(json: any[]): Category[]{
    const categories: Category[] = [];
    json.forEach(category => categories.push(Object.assign(new Category, category)))

    return categories;
  }

}
