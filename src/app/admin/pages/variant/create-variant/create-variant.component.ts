import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorService } from 'src/app/service/color.service';
import { ProductService } from 'src/app/service/product.service';
import { SizeService } from 'src/app/service/size.service';
import { VariantService } from 'src/app/service/variant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-variant',
  templateUrl: './create-variant.component.html',
  styleUrls: ['./create-variant.component.scss']
})
export class CreateVariantComponent implements OnInit {

  public errors: any;
  public products: any;
  public colors: any;
  public sizes: any;

  constructor(
    private variantService: VariantService,
    private productService: ProductService,
    private colorService: ColorService,
    private sizeService: SizeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      (res: any) => {
        this.products = res.data;
      }
    );
    this.colorService.getAllColor().subscribe(
      (res: any) => {
        this.colors = res.data;
      }
    );
    this.sizeService.getAllSize().subscribe(
      (res: any) => {
        this.sizes = res.data;        
      }
    )
  }

  formData = new FormGroup({
    productId: new FormControl('', [Validators.required]),
    colorId: new FormControl('', [Validators.required]),
    sizeId: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
  });


  onSubmit() {
    this.variantService.addVariant(this.formData.value).subscribe({
      next: (res) => {
        this.router.navigate(['/admin/variantproduct/list']);
        this.Successful();
      },
      error: (err) => {
        this.errors = err.error.message;
      }
    })
  }

  get f(): any {
    return this.formData.controls;
  }

  Successful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Create variant Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
