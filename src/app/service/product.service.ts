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

  
  public getAllProduct():Observable<any>{
    return this.http.get<any>(`${this.apiServiceUrl}/all`);
  }

  public fillterProduct(queryParams:string):Observable<any>{    
    return this.http.get<any>(`${this.apiServiceUrl}`+ queryParams);
  }

  public getProduct(keyword:any, pageNo:any = 1):Observable<any>{
    if(keyword != null){
      return this.http.get<any>(`${this.apiServiceUrl}?keyword=${keyword}&pageNo=${pageNo}`);
    }
    return this.http.get<any>(`${this.apiServiceUrl}?pageNo=${pageNo}`);
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
