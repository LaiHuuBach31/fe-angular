import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/service/category';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  public categories: any = [];
  public error :any;
  public resultSearch:boolean = false;
  public totalItems:any;
  public pages: any;
  public numbers: number[] = [];
  public kw:any;

  constructor(
    private categoryService: CategoryService, 
    private route: ActivatedRoute,
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    this.search();
    const keyword = this.route.snapshot.queryParamMap.get('keyword');
    this.kw = keyword;
    this.formSearch.patchValue({'keyword' : keyword});
  }

  public getCategory(key:any = null, pageNo:any = 1) {
      this.categoryService.getCategory(key, pageNo).subscribe(
        {
          next: (res: any) => {        
            this.categories = res.data.content; 
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
      this.categoryService.deleteCategory(id).subscribe({
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

  formSearch = new FormGroup({
    keyword: new FormControl('')
  });

  search(){
    this.route.queryParams.subscribe(params => {
      const key = params['keyword'];
      this.kw = key;
      const pageNo = params['pageNo'];
      this.getCategory(key, pageNo);
    });
    this.resultSearch = false ; 
  }

  onSubmit(){
    this.router.navigate([], {
      queryParams: {
        'pageNo': null,  
        'keyword': this.formSearch.value.keyword, 
      },
      queryParamsHandling: 'merge'
    });
    
  }
}
