import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from 'src/app/service/checkout.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  public orders: any = [];
  public error :any;
  public resultSearch:boolean = false;
  public totalItems:any;
  public pages: any;
  public numbers: number[] = [];

  constructor(
    private orderService: CheckoutService, 
    private route: ActivatedRoute,
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    this.search();
  }

  public getOrder(pageNo:any = 1) {
      this.orderService.getOrder(pageNo).subscribe(
        {
          next: (res: any) => {        
            this.orders = res.data.content; 
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
      this.orderService.deleteOrder(id).subscribe({
        next: res => {
          this.getOrder();
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

  search(){
    this.route.queryParams.subscribe(params => {
      const pageNo = params['pageNo'];
      this.getOrder(pageNo);
    });
    this.resultSearch = false ; 
  }

  onSubmit(){
    this.router.navigate([], {
      queryParams: {
        'pageNo': null,  
      },
      queryParamsHandling: 'merge'
    });
    
  }
}
