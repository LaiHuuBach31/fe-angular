import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CheckoutService } from 'src/app/service/checkout.service';
import { DataCartService } from 'src/app/service/data-cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{

  public buyCarts:any;
  public total:any = 0;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private route: Router
  ){}

  ngOnInit(): void {
    this.buyCarts = JSON.parse(localStorage.getItem('cart') || '{}');
    this.buyCarts.forEach((item:any)=>{
      this.total += item.product.price * item.quantity;
    })
    this.cartService.updateCheckout(this.buyCarts).subscribe({
      next: res=>{},
      error: err=>{}
    })
  }

  checkout = new FormGroup({
    shippingMethod: new FormControl(),
    paymentMethod: new FormControl(),
    orderNote: new FormControl()
  });

 
  checkOut(){    
    let data = {
      ...this.checkout.value,
      total: this.total
    }  
    this.checkoutService.addOrder(data).subscribe({
      next: res => {
        this.route.navigate(['']);
        this.Successful();
      },
      error: err => {}
    })
    localStorage.removeItem('cart');
  }

  get f(): any {
    return this.checkout.controls;
  }

  
  Successful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
  
}
