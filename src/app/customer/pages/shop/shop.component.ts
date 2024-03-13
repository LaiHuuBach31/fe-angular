import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ColorService } from 'src/app/service/color.service';
import { ProductService } from 'src/app/service/product.service';
import { SizeService } from 'src/app/service/size.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public products: any = [];
  public categories: any = [];
  public colors: any = [];
  public sizes: any = [];
  public totalItems: any;
  public pages: any;
  public numbers: number[] = [];
  public error: any;
  public kw: any;
  public cate: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private colorService: ColorService,
    private sizeService: SizeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getColor();
    this.getSize();
    this.search();
    const keyword = this.route.snapshot.queryParamMap.get('keyword');
    this.formSearch.patchValue({ keyword: keyword })
    this.kw = keyword;
  }

  public getCategory() {
    this.categoryService.getAllCategory().subscribe(
      {
        next: (res: any) => {
          this.categories = res.data;
        },
        error: err => {
          this.error = err.error.message;
        }
      }
    )
  }
  public getColor() {
    this.colorService.getAllColor().subscribe(
      {
        next: (res: any) => {
          this.colors = res.data;
        },
        error: err => {
          this.error = err.error.message;
        }
      }
    )
  }
  public getSize() {
    this.sizeService.getAllSize().subscribe(
      {
        next: (res: any) => {
          this.sizes = res.data;
        },
        error: err => {
          this.error = err.error.message;
        }
      }
    )
  }

  public getProduct(keyword: any = null, pageNo: any = 1) {
    this.productService.getProduct(keyword, pageNo).subscribe(
      {
        next: (res: any) => {
          this.totalItems = res.data.totalElements;
          this.pages = res.data.totalPages;
          this.products = res.data.content;
          this.numbers = [];
          for (let i = 1; i <= this.pages; i++) {
            this.numbers.push(i);
          }
        },
        error: err => {
          this.error = err.error.message;
        }
      }
    )
  }



  search() {
    this.route.queryParams.subscribe(
      params => {
        const categoryId = params['categoryId'];
        if(categoryId !== undefined){
          this.cate = categoryId;
        } else{
          const pageNo = params['pageNo'];
          const keyword = params['keyword'];
          this.kw = keyword;
          this.cate = null;
          this.getProduct(keyword, pageNo);
        }
      }
    )
  }

  formSearch = new FormGroup({
    keyword: new FormControl(),
  });

  onSearch() {
    this.router.navigate([], {
      queryParams: {
        pageNo: null,
        keyword: this.formSearch.value.keyword
      },
      queryParamsHandling: 'merge',
    });
  }

  filterCategory(categoryId: any) {
    this.router.navigate([], {
      queryParams: {
        pageNo: 1,
      },
      queryParamsHandling: 'merge',
    });     
    this.route.queryParams.subscribe(
      params => {
        const pageNo = params['pageNo'];
        this.cate = categoryId; 
        this.productService.fillterProduct(categoryId, pageNo).subscribe({
          next: res => {
            if (res.data == null) {
              this.products = [];
              this.totalItems = 0;
            } else {
              this.totalItems = res.data.totalElements;
              this.pages = res.data.totalPages;
              this.products = res.data.content;
              this.numbers = [];
              for (let i = 1; i <= this.pages; i++) {
                this.numbers.push(i);
              }
            }
          },
          error: err => {
            this.error = err.error.message;
          }
        })
      }
    )
      
  }

  formPrice = new FormGroup({
    min_price: new FormControl(),
    max_price: new FormControl(),
  });

  onPrice() {

  }
}
