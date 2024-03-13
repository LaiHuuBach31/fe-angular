import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.scss']
})
export class ListImageComponent implements OnInit {

  public images: any = [];
  public error :any;
  public resultSearch:boolean = false;
  public totalItems:any;
  public pages: any;
  public numbers: number[] = [];

  constructor(
    private imageService: ImageService, 
    private route: ActivatedRoute,
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    this.pagination();
  }

  public getCategory(key:any = null, pageNo:any = 1) {
      this.imageService.getImage(key, pageNo).subscribe(
        {
          next: (res: any) => {        
            this.images = res.data.content; 
            this.totalItems = res.data.totalElements;
            this.pages = res.data.totalPages; 
            this.numbers = [];
            for (let i = 1; i <= this.pages; i++) {
              this.numbers.push(i);
            }
          }, 
          error: (err)=>{
            console.log(err);
            this.error = err.error.message; 
          }
        }
      );
      this.error = null;
  }

  delete(id:number){
    if(confirm("Are you sure to delete it?")){
      this.imageService.deleteImage(id).subscribe({
        next: res => {
          this.getCategory();
          this.deleteSuccessful();
      },error:  err => {
        this.error = err.error.message; 
      }})
    }
  }

  deleteSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Delete Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }

  pagination(){
    this.route.queryParams.subscribe(params => {
      const pageNo = params['pageNo'];
      this.getCategory(null, pageNo);
    });
  }
  
}
