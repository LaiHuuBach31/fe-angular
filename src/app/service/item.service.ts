import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiServiceUrl = environment.apiBaseUrl + '/item';

  constructor(private http: HttpClient) { }

  public getAllItem():Observable<any>{
    return this.http.get<any>(`${this.apiServiceUrl}/all`);
  }

  public getItem(keyword:any, pageNo:any = 1):Observable<any>{
    if(keyword != null){
      return this.http.get<any>(`${this.apiServiceUrl}?keyword=${keyword}&pageNo=${pageNo}`);
    }
    return this.http.get<any>(`${this.apiServiceUrl}?pageNo=${pageNo}`);
  }

  public getItemId(itemId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServiceUrl}/${itemId}`);
  }

  public addItem(item : any):Observable<any>{
    return this.http.post<any>(`${this.apiServiceUrl}`, item);
  }

  public updateItem(itemId : number, item : any):Observable<any>{
    return this.http.put<any>(`${this.apiServiceUrl}/${itemId}`, item);
  }

  public deleteItem(itemId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/${itemId}`);
  }
  
}
