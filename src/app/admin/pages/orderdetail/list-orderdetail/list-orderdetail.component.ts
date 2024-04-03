import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderdetailService } from 'src/app/service/orderdetail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-orderdetail',
  templateUrl: './list-orderdetail.component.html',
  styleUrls: ['./list-orderdetail.component.scss']
})
export class ListOrderdetailComponent implements OnInit {

  public orderdetails: any = [];
  public error :any;
  public resultSearch:boolean = false;
  public totalItems:any;
  public pages: any;
  public numbers: number[] = [];

  constructor(
    private orderDetailService: OrderdetailService, 
    private route: ActivatedRoute,
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    this.search();
  }

  public getOrder(pageNo:any = 1) {
      this.orderDetailService.getOrder(pageNo).subscribe(
        {
          next: (res: any) => {        
            this.orderdetails = res.data.content; 
            this.totalItems = res.data.totalElements;
            this.pages = res.data.totalPages; 
            this.numbers = [];
            for (let i = 1; i <= this.pages; i++) {
              this.numbers.push(i);
            }
          }, 
          error: (err:any)=>{
            console.log(err);
            this.error = err.error.message; 
          }
        }
      );
      this.error = null;
  }

  delete(id:number){
    if(confirm("Are you sure to delete it?")){
      this.orderDetailService.deleteOrder(id).subscribe({
        next: (res: any) => {
          this.getOrder();
          this.deleteSuccessful();
      },error:  (err: any) => {
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
