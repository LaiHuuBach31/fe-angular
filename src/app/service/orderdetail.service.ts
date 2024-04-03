import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {

  private apiServerUrl = environment.apiBaseUrl + '/orderdetail';

  constructor(private http: HttpClient) { }

  public getOrder(pageNo:any = 1):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}?pageNo=${pageNo}`);
  }

  public deleteOrder(orderId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${orderId}`);
  }

}
