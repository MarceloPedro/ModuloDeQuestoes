import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TypesResponse } from '../models/types-response';


@Injectable({
  providedIn: 'root'
})
export class TypesResponseService {

    urlAPI = 'api/types_response';

  constructor(private http: HttpClient) { }


  getById(id: number): Observable<TypesResponse>{
    return this.http.get(`${this.urlAPI}/${id}`)
    .pipe(
      catchError(this.handleError),
      map(this.jsonToResource)
    )
  }

  getAll(): Observable<TypesResponse[]>{
    return this.http.get(this.urlAPI)
      .pipe(
        catchError(this.handleError),
        map(this.jsonToResources)
    )
  }


  //PRIVATE METHODS

  protected handleError(error: any): Observable<any>{
    return throwError(error);
  }

  protected jsonToResource(json: any): TypesResponse{
    return json as TypesResponse;
  }

  protected jsonToResources(json: any[]): TypesResponse[]{
    const resources: TypesResponse[] = [];
    json.forEach(resource => resources.push(resource as TypesResponse))

    return resources;
  }

}
