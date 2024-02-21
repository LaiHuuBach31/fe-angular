import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiServerUrl = environment.apiBaseUrl + '/category';

  constructor(private http: HttpClient) { }

  public getCategory():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}`);
  }

  public getCategoryId(categoryId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/${categoryId}`);
  }

  public addCategory(category : any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}`, category);
  }

  public updateCategory(categoryId : number, category : any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${categoryId}`, category);
  }

  public deleteCategory(categoryId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${categoryId}`);
  }

}
