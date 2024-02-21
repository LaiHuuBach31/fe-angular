import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-poduct',
  templateUrl: './list-poduct.component.html',
  styleUrls: ['./list-poduct.component.scss']
})
export class ListPoductComponent implements OnInit {

  public products:any = [];
  public error :any;

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(){
    this.productService.getProduct().subscribe(
      (res:any)=>{
        this.products = res.data.content;
      }
    )
  }

  public delete(id:number){
    if(confirm("Are you sure to delete it?")){
      this.productService.deleteProduct(id).subscribe({
        next: (res) => {
          this.getProduct();
          this.deleteSuccessful();
        },
        error: (err) => {
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
}
