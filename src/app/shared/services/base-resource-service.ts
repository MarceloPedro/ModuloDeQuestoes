import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseResourceModel } from '../models/base-resource-model';

@Injectable({
  providedIn: 'root'
})
export class BaseResourceService <T extends BaseResourceModel> {

    urlAPI = this.urlApi;
    http: HttpClient;

  constructor(
      protected injector: Injector,
      protected urlApi: string
      ) { 
          this.http = this.injector.get(HttpClient);
      }


  getById(id: number): Observable<T>{
    return this.http.get(`${this.urlAPI}/${id}`)
    .pipe(
      catchError(this.handleError),
      map(this.jsonToResource)
    )
  }

  getAll(): Observable<T[]>{
    return this.http.get(this.urlAPI)
      .pipe(
        catchError(this.handleError),
        map(this.jsonToResources)
    )
  }


  create(resource: T): Observable<T>{
    return this.http.post(this.urlAPI, resource)
      .pipe(
        catchError(this.handleError),
        map(this.jsonToResource)
    )
  }

  update(resource: T): Observable<T>{
    return this.http.put(`${this.urlAPI}/${resource.id}`, resource)
      .pipe(
        catchError(this.handleError),
        map(() => resource)
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

  protected handleError(error: any): Observable<any>{
    return throwError(error);
  }

  protected jsonToResource(json: any): T{
    return json as T;
  }

  protected jsonToResources(json: any[]): T[]{
    const resources: T[] = [];
    json.forEach(resource => resources.push(resource as T))

    return resources;
  }

}
