import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  mark_cart(e:any) {
    let form = document.getElementById('form') as HTMLInputElement;
    let result = Number((document.getElementById('quantity') as HTMLInputElement).value);    
    if (e === '-') {
        if (Number(result) > 1) {
            result = result - 1;
        }
    } else {
        result = Number(result) + 1;
    }
    form.onsubmit;
  }

  // quantityCart(id) {
  //   let form = document.getElementById('form' + id);
  
  //   let result1 = document.getElementById('quantity' + id);
  //   if(result1.value <= 0) {
  //       document.getElementById('quantity' + id).value = 1;
  //   }
  //   if(isNaN(result1.value)) {
  //       document.getElementById('quantity' + id).value = 1;
  //   }
  //   form.submit();
  
  // }

  // mark_cart_768(e, id) {
  //   let form = document.getElementById('form' + id);
  //   let result = document.getElementById('quantity' + id);
  //   if (e == '-') {
  //       if (result.value > 1) {
  //           result.value = result.value - 1;
  //       }
  //   } else {
  //       result.value = Number(result.value) + 1;
  //   }
  //   form.submit();
  // }
  
} 
