import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public users: any = [];
  public totalItems: any;
  public pages: any;
  public numbers: number[] = [];
  public error: any;
  public kw:any;

  constructor(
    private userService: UserService,
    private roter: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.search();
    const key = this.route.snapshot.queryParamMap.get('keyword');
    this.kw = key;
    this.fromSearch.patchValue({keyword: key});
  }

  getAllSize(keyword: any = null, pageNo: any = 1) {
    this.userService.getUser(keyword, pageNo).subscribe({
      next: (res: any) => {
        this.users = res.data.content;
        this.totalItems = res.data.totalElements;
        this.pages = res.data.totalPages;
        this.numbers = [];
        for (let i = 1; i <= this.pages; i++) {
          this.numbers.push(i);
        }
      },
      error: err => {
        this.error = err.error.message;
      }
    })
  }

  public delete(id: number) {
    if (confirm("Are you sure to delete it?")) {
      this.userService.deleteUser(id).subscribe({
        next: (res) => {
          this.getAllSize();
          this.deleteSuccessful();
        },
        error: (err) => {
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

  fromSearch = new FormGroup({
    keyword: new FormControl('')
  })

  search() {
    this.route.queryParams.subscribe(
      params => {
        const pageNo = params['pageNo'];
        const keyword = params['keyword'];
        this.kw = keyword;
        this.getAllSize(keyword, pageNo);
      }
    )
  }

  onSubmit() {
    this.roter.navigate([],{
        queryParams : {
          pageNo: null,
          keyword: this.fromSearch.value.keyword
        }, 
        queryParamsHandling: 'merge', 
      }
    );
   
  }
}
