import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiServerUrl = environment.apiBaseUrl + '/item';

  constructor(private http: HttpClient) { }

  public getItem():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}`);
  }

  public getItemId(itemId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/${itemId}`);
  }

  public addItem(item : any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}`, item);
  }

  public updateItem(itemId : number, item : any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${itemId}`, item);
  }

  public deleteItem(itemId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${itemId}`);
  }
  
}
