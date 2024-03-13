import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { ProductService } from 'src/app/service/product.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.scss']
})
export class CreateImageComponent implements OnInit{

    public errors: any;
    public products:any;
    public file: string = '';
   
    constructor(
        private productService: ProductService, 
        private imageService: ImageService,
        private uploadService: UploadService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.productService.getAllProduct().subscribe(
            (res: any) => {
              this.products = res.data;
            }
        );
    }

    formData = new FormGroup({
        name: new FormControl('', [Validators.required]),
        productId: new FormControl('', [Validators.required]),
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
        const imageData = {
            ...this.formData.value,
            name : this.file
        }
        this.imageService.addImage(imageData).subscribe({
            next: (res) => {
                this.router.navigate(['/admin/image/list']);
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
            title: 'Create image Successfully',
            showConfirmButton: false,
            timer: 1000
        })
    }


}
