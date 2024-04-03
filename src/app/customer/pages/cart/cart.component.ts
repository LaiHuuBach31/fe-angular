import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { CheckoutService } from 'src/app/service/checkout.service';
import { DataCartService } from 'src/app/service/data-cart.service';
import { VariantService } from 'src/app/service/variant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public carts: any = [];
  public error: any;
  public s: any = [];
  public buyCart: any = [];
  
  constructor(
    private cartService: CartService,
    private variantService: VariantService,
    private checkOutService: CheckoutService,
    private dataService: DataCartService
  ) { }

  ngOnInit(): void {
    this.getCart();
  }

  async getVariant(id: any) {
    return this.variantService.getListVariant(id).toPromise().then(res => res.data);
  }

  getCart() {
    this.cartService.getCart().subscribe({
      next: async (res) => {
        this.carts = res.data;
        const variants = await Promise.all(this.carts.map((x: any) => this.getVariant(x.product.id)));
        this.carts.forEach((x: any, i: number) => x.product.variant = variants[i]);
      },
      error: err => { }
    })
  }

  updateSize(sizeId: any, id: any): void {
    this.cartService.update(id, null, sizeId.value, null).subscribe({
      next: res => { },
      error: err => { }
    })

  }

  updateColor(colorId: any, id: any): void {
    this.cartService.update(id, null, colorId.value, null).subscribe({
      next: res => { },
      error: err => { }
    })

  }

  mark_cart(e: any, id: any) {
    let result = document.getElementById('quantity' + id) as HTMLInputElement;
    let total = document.getElementById('total' + id) as HTMLInputElement;
    let price = document.getElementById('price' + id) as HTMLInputElement;

    if (e === '-') {
      if (Number(result.value) > 1) {
        result.value = (Number(result.value) - 1).toString();
        result.innerText = result.value;
        this.cartService.update(id, Number(result.value), null, null).subscribe({
          next: res => { },
          error: err => { }
        })
      }
    } else {
      result.value = (Number(result.value) + 1).toString();
      result.innerText = result.value;
      this.cartService.update(id, Number(result.value), null, null).subscribe({
        next: res => { },
        error: err => { }
      })
    }
    let totalPrice = Number(price.innerText.replace('$', '')) * Number(result.value);
    total.innerText = '$ ' + totalPrice;
  }

  public delete(id: number) {
    if (confirm("Are you sure to delete it?")) {
      this.cartService.deleteCart(id).subscribe({
        next: (res) => {
          this.getCart();
          this.Successful();
        },
        error: (err) => {
          this.error = err.error.message;
        }
      })
    }
  }

  data:any = [];
  chooseCart(cart: any) {
    this.buyCart.includes(cart) ? this.buyCart = this.buyCart.filter((e: any) => e !== cart) : this.buyCart.push(cart);
    localStorage.setItem('cart', JSON.stringify(this.buyCart));
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
