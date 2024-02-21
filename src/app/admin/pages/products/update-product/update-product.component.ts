import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategoryService } from 'src/app/service/category.service';
import { ItemService } from 'src/app/service/item.service';
import { ProductService } from 'src/app/service/product.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit{

  public Editor = ClassicEditor;
  public errors: any;
  public categories:any;
  public items:any;
  public file: string = '';
  public id:any;
 
  constructor(
      private productService: ProductService, 
      private categoryService: CategoryService,
      private itemService: ItemService,
      private uploadService: UploadService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.categoryService.getCategory().subscribe(
          (res: any) => {
            this.categories = res.data.content;
          }
      );
      this.itemService.getItem().subscribe(
          (res:any)=>{
              this.items = res.data.content;
          }
      );
      this.id = this.route.snapshot.params['id'];
      this.productService.getProductId(this.id).subscribe(
        res =>{
          this.formData.patchValue(res.data);
        }
      )
  }

  formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      discount: new FormControl(''),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      categoryId: new FormControl('', [Validators.required]),
      itemId: new FormControl('', [Validators.required]),
  });

  onChange(event: any){
      const file = event.target.files[0];
      const formImage = new FormData();
      formImage.append('file', file);
      this.uploadService.uploadFile(formImage).subscribe({
          next: (res)=>{
              this.file = res.data;
          },
          error: (err)=>{
              this.errors = err.error.message;
          }
      })
  }

  onSubmit() {
      const productData = {
          ...this.formData.value,
          image : this.file
      }
      this.productService.updateProduct(this.id, productData).subscribe({
          next: (res) => {
              this.router.navigate(['/admin/product/list']);
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
          title: 'Update product Successfully',
          showConfirmButton: false,
          timer: 1000
      })
  }

  
}
