import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiServerUrl = environment.apiBaseUrl + '/category';

  constructor(private http: HttpClient) { }

  public getAllCategory():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public getCategory(keyword:any, pageNo:any = 1):Observable<any>{
    if(keyword != null){
      return this.http.get<any>(`${this.apiServerUrl}?keyword=${keyword}&pageNo=${pageNo}`);
    }
    return this.http.get<any>(`${this.apiServerUrl}?pageNo=${pageNo}`);
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
