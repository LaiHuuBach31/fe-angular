import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ImageService } from 'src/app/service/image.service';
import { ProductService } from 'src/app/service/product.service';
import { VariantService } from 'src/app/service/variant.service';
import Swal from 'sweetalert2';
import { __values } from 'tslib';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public id: any;
  public product: any;
  public variants: any = [];
  public iamges: any = [];

  constructor(
    private productService: ProductService,
    private variantService: VariantService,
    private imageService: ImageService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductId(this.id).subscribe({
      next: res => {
        this.product = res.data;
      },
      error: err => {

      }
    })
    this.variantService.getListVariant(this.id).subscribe(
      res => {
        if (res.data == null) {
          this.variants = [];
        } else {
          this.variants = res.data;
        }
      }
    )
    this.imageService.getListImage(this.id).subscribe(
      res => {
        this.iamges = res.data;
      }
    )
  }

  addCart = new FormGroup({
    quantity: new FormControl('1'),
    colorId: new FormControl(),
    sizeId: new FormControl(),

  });

  onCart() {
    let cartData = {
      ...this.addCart.value,
      productId: this.id
    }

    this.cartService.addCart(cartData).subscribe({
      next: res => {
        this.router.navigate(['/cart']);
        this.Successful();
      },
      error: err => {

      }
    })
  }

  get f(): any {
    return this.addCart.controls;
  }

  mark(e: any) {
    let result = document.getElementById('quantity') as HTMLInputElement;
    if (e == '-') {
      if (Number(result.value) > 1) {
        result.value = (Number(result.value) - 1).toString();
      }
    } else {
      result.value = (Number(result.value) + 1).toString();
    }
    this.addCart.controls.quantity.setValue(result.value.toString());
  }

  Successful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Add To Cart Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }

}
