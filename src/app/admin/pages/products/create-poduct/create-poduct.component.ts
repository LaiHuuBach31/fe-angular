import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategoryService } from 'src/app/service/category.service';
import { ItemService } from 'src/app/service/item.service';
import { ProductService } from 'src/app/service/product.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-create-poduct',
    templateUrl: './create-poduct.component.html',
    styleUrls: ['./create-poduct.component.scss']
})
export class CreatePoductComponent {

    public Editor = ClassicEditor;
    public errors: any;
    public categories:any;
    public items:any;
    public file: string = '';
   
    constructor(
        private productService: ProductService, 
        private categoryService: CategoryService,
        private itemService: ItemService,
        private uploadService: UploadService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.categoryService.getAllCategory().subscribe(
            (res: any) => {
              this.categories = res.data;
            }
        );
        this.itemService.getAllItem().subscribe(
            (res:any)=>{
                this.items = res.data;
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
        this.productService.addProduct(productData).subscribe({
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
            title: 'Create category Successfully',
            showConfirmButton: false,
            timer: 1000
        })
    }

    

}
