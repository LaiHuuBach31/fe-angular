import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServiceUrl = environment.apiBaseUrl + '/product';

  constructor(private http: HttpClient) { }

  public getProduct():Observable<any>{
    return this.http.get<any>(`${this.apiServiceUrl}`);
  }

  public getProductId(productId : number):Observable<any>{
    return this.http.get<any>(`${this.apiServiceUrl}/${productId}`);
  }

  public addProduct(product : any):Observable<any>{
    return this.http.post<any>(`${this.apiServiceUrl}`, product);
  }

  public updateProduct(productId : number, product : any):Observable<any>{
    return this.http.put<any>(`${this.apiServiceUrl}/${productId}`, product);
  }

  public deleteProduct(productId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/${productId}`);
  }
  
}
