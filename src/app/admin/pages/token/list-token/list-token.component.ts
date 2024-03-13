import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-token',
  templateUrl: './list-token.component.html',
  styleUrls: ['./list-token.component.scss']
})
export class ListTokenComponent implements OnInit {

  public tokens: any = [];
  public error :any;
  public resultSearch:boolean = false;
  public totalItems:any;
  public pages: any;
  public numbers: number[] = [];

  constructor(
    private tokenService: TokenService, 
    private route: ActivatedRoute,
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    this.pagination();
  }

  public getToken(key:any = null, pageNo:any = 1) {
      this.tokenService.getToken(key, pageNo).subscribe(
        {
          next: (res: any) => {        
            this.tokens = res.data.content; 
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
      this.tokenService.deleteToken(id).subscribe({
        next: res => {
          this.getToken();
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
      this.getToken(null, pageNo);
    });
  }

}
