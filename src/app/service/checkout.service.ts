import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private apiServerUrl = environment.apiBaseUrl + '/order';

  constructor(private http: HttpClient) { }

  public getAllOrder():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public getOrder(pageNo:any = 1):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}?pageNo=${pageNo}`);
  }

  public getOrderId(orderId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/${orderId}`);
  }

  public addOrder(order : any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}`, order);
  }

  public updateOrder(orderId : number, order : any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${orderId}`, order);
  }

  public deleteOrder(orderId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${orderId}`);
  }


}
