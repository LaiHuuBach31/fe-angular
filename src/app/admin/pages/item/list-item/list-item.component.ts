import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  public items: any = [];
  public error: any;
  public totalItem: any;
  public pages: any;
  public numbers: number[] = [];
  public kw: any;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.search();
    const keyword = this.route.snapshot.queryParamMap.get('keyword');
    this.kw = keyword;
    this.fromSearch.patchValue({keyword: keyword});
  }

  fromSearch = new FormGroup({
    keyword: new FormControl('')
  });

  public getItem(key: any = null, pageNo: any = 1) {
    this.itemService.getItem(key, pageNo).subscribe(
      {
        next: (res: any) => {
          this.items = res.data.content;
          this.totalItem = res.data.totalElements;
          this.pages = res.data.totalPages;
          this.numbers = [];
          for (let i = 1; i <= this.pages; i++) {
            this.numbers.push(i);
          }
        },
        error: (err: any) => {
          this.error = err.error.message;
        }
      }
    );
  }

  delete(id: number) {
    if (confirm("Are you sure to delete it?")) {
      this.itemService.deleteItem(id).subscribe({
        next: res => {
          this.getItem();
          this.deleteSuccessful();
        }, error: err => {
          this.error = err.error.message;
        }
      })
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
        const key = params['keyword']; 
        this.kw = key;       
        this.getItem(key, pageNo);
      }
    )
  }

  onSubmit(){
    this.router.navigate([], 
      {
        queryParams:{
          pageNo: null,
          keyword: this.fromSearch.value.keyword 
        }, 
        queryParamsHandling: 'merge',
      }
    );
  }
}
