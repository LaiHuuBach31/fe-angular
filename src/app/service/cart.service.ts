import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiServiceUrl = environment.apiBaseUrl + '/cart';

  constructor(private http: HttpClient) { }
  
  public getCart():Observable<any>{
    return this.http.get<any>(`${this.apiServiceUrl}`);
  }

  public getCartId(cartId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServiceUrl}/${cartId}`);
  }

  public addCart(cart : any):Observable<any>{
    return this.http.post<any>(`${this.apiServiceUrl}`, cart);
  }

  public updateCart(cartId : number, cart : any):Observable<any>{
    return this.http.put<any>(`${this.apiServiceUrl}/${cartId}`, cart);
  }

  public update(cartId : number, quantity : any, sizeId:any, colorId:any):Observable<any>{
    if(quantity != null){
      return this.http.put<any>(`${this.apiServiceUrl}/update/${cartId}?quantity=${quantity}`, null);
    }
    if(colorId != null){
      return this.http.put<any>(`${this.apiServiceUrl}/update/${cartId}?colorId=${colorId}`, null);
    }
    return this.http.put<any>(`${this.apiServiceUrl}/update/${cartId}?sizeId=${sizeId}`, null);
  }

  public updateCheckout(carts:any):Observable<any>{
    return this.http.put<any>(`${this.apiServiceUrl}/checkout`, carts);
  }

  public deleteCart(cartId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/${cartId}`);
  }
  
}
