import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { ProductService } from 'src/app/service/product.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.scss']
})
export class UpdateImageComponent implements OnInit {

  public errors: any;
  public products: any;
  public file: string = '';
  public id:any;

  constructor(
    private productService: ProductService,
    private imageService: ImageService,
    private uploadService: UploadService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      (res: any) => {
        this.products = res.data;
      }
    );
    this.id = this.route.snapshot.params['id'];
    this.imageService.getImageId(this.id).subscribe(
      res =>{
        this.formData.patchValue(res.data);
      }
    )
  }

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    productId: new FormControl('', [Validators.required]),
  });

  onChange(event: any) {
    const file = event.target.files[0];
    const formImage = new FormData();
    formImage.append('file', file);
    this.uploadService.uploadFile(formImage).subscribe({
      next: (res) => {
        this.file = res.data;
      },
      error: (err) => {
        this.errors = err.error.message;
      }
    })
  }

  onSubmit() {
    const imageData = {
      ...this.formData.value,
      name: this.file
    }
    this.imageService.updateImage(this.id, imageData).subscribe({
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
      title: 'Update image Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }


}
