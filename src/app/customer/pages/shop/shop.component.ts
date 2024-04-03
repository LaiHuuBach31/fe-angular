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
  public color: any;
  public size: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private colorService: ColorService,
    private sizeService: SizeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.filter();
    this.getCategory();
    this.getColor();
    this.getSize();
    const keyword = this.route.snapshot.queryParamMap.get('keyword');
    this.formSearch.patchValue({ keyword: keyword })
    this.kw = keyword;
    const min_price = this.route.snapshot.queryParamMap.get('minPrice');
    const max_price = this.route.snapshot.queryParamMap.get('maxPrice');
    this.formPrice.patchValue({ minPrice: min_price })
    this.formPrice.patchValue({ maxPrice: max_price })
    const size = this.route.snapshot.queryParamMap.get('sizeId');
    this.size = size;
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

  // public getProduct(keyword: any = null, pageNo: any = 1) {
  //   this.productService.getProduct(keyword, pageNo).subscribe(
  //     {
  //       next: (res: any) => {
  //         this.totalItems = res.data.totalElements;
  //         this.pages = res.data.totalPages;
  //         this.products = res.data.content;
  //         this.numbers = [];
  //         for (let i = 1; i <= this.pages; i++) {
  //           this.numbers.push(i);
  //         }
  //       },
  //       error: err => {
  //         this.error = err.error.message;
  //       }
  //     }
  //   )
  // }



  search() {
    // this.route.queryParams.subscribe(
    //   params => {
    //     const categoryId = params['categoryId'];
    //     if (categoryId !== undefined) {
    //       this.cate = categoryId;
    //     } else {
    //       const pageNo = params['pageNo'];
    //       const keyword = params['keyword'];
    //       this.kw = keyword;
    //       this.cate = null;
    //       this.getProduct(keyword, pageNo);
    //     }
    //   }
    // )
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

  formPrice = new FormGroup({
    minPrice: new FormControl(),
    maxPrice: new FormControl(),
  })
  onPrice(){
    this.router.navigate([], {
      queryParams: {
        pageNo: null,
        minPrice: this.formPrice.value.minPrice,
        maxPrice: this.formPrice.value.maxPrice
      },
      queryParamsHandling: 'merge',
    });
  }

  filter() {
    this.route.queryParams.subscribe(
      params => {
        const categoryId = params['categoryId'];
        const colorId = params['colorId'];
        const sizeId = params['sizeId'];
        const keyword = params['keyword'];
        if(categoryId !== undefined || colorId !== undefined || sizeId !== undefined ){
          this.cate = categoryId;
          this.color = colorId;
          this.size = sizeId;
          this.kw = keyword;
        } else{
          this.cate = null;
          this.color = null;
          this.size = null;
          this.kw = null;
        }
        this.productService.fillterProduct(this.getQuery()).subscribe({
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
            console.log(err);
          }
        })
      })
  }

  private getQuery() {
    let queryParamsArray: any = [];
    this.route.queryParams.forEach(params => {
      if (params['pageNo']) queryParamsArray.push('pageNo=' + params['pageNo']);
      if (params['keyword']) queryParamsArray.push('keyword=' + params['keyword']);
      if (params['categoryId']) queryParamsArray.push('categoryId=' + params['categoryId']);
      if (params['minPrice']) queryParamsArray.push('minPrice=' + params['minPrice']);
      if (params['maxPrice']) queryParamsArray.push('maxPrice=' + params['maxPrice']);
      if (params['sort']) queryParamsArray.push('sort=' + params['sort']);
      if (params['colorId']) queryParamsArray.push('colorId=' + params['colorId']);
      if (params['sizeId']) queryParamsArray.push('sizeId=' + params['sizeId']);
    });
    let queryParams = queryParamsArray.join('&');
    return queryParams ? '?' + queryParams : '';
  }

}
