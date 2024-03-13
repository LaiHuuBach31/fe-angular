import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-poduct',
  templateUrl: './list-poduct.component.html',
  styleUrls: ['./list-poduct.component.scss']
})
export class ListPoductComponent implements OnInit {

  public products:any = [];
  public totalItems:any;
  public pages:any;
  public numbers:number[] = [];
  public error :any;
  public kw :any;

  constructor(
    private productService : ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.search();
    const keyword = this.route.snapshot.queryParamMap.get('keyword');
    this.formSearch.patchValue({keyword: keyword})
    this.kw = keyword;
  }

  public getProduct(keyword:any = null, pageNo:any = 1){
    this.productService.getProduct(keyword, pageNo).subscribe(
      {
        next: (res:any)=>{
          this.totalItems = res.data.totalElements;
          this.pages = res.data.totalPages;
          this.products = res.data.content;
          this.numbers = [];
          for (let i = 1; i <= this.pages; i++) {
            this.numbers.push(i);
          }
        },
        error: err =>{
          this.error = err.error.message;
        }
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

  search(){
    this.route.queryParams.subscribe(
      params => {
        const pageNo = params['pageNo'];
        const keyword = params['keyword'];
        this.kw = keyword;
        this.getProduct(keyword, pageNo);
      }
    )
  }

  formSearch = new FormGroup({
    keyword: new FormControl(),
  });

  onSubmit(){
    this.router.navigate([],{
        queryParams: {
          pageNo: null,
          keyword : this.formSearch.value.keyword
        }, 
        queryParamsHandling: 'merge',
      }
    );
  }
}
