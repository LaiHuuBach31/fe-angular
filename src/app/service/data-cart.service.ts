import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCartService {

  private sharedDataCart: any;

  constructor() { }

  setData(data: any) {
    this.sharedDataCart = data;
  }

  getData() {
    return this.sharedDataCart;
  }
}
