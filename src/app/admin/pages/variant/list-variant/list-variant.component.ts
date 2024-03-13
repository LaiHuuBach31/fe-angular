import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariantService } from 'src/app/service/variant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-variant',
  templateUrl: './list-variant.component.html',
  styleUrls: ['./list-variant.component.scss']
})
export class ListVariantComponent implements OnInit {

  public variants: any = [];
  public error: any;
  public resultSearch: boolean = false;
  public totalItems: any;
  public pages: any;
  public numbers: number[] = [];

  constructor(
    private variantService: VariantService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.pagination();
  }

  public getToken(key: any = null, pageNo: any = 1) {
    this.variantService.getVariant(key, pageNo).subscribe(
      {
        next: (res: any) => {
          this.variants = res.data.content;
          this.totalItems = res.data.totalElements;
          this.pages = res.data.totalPages;
          this.numbers = [];
          for (let i = 1; i <= this.pages; i++) {
            this.numbers.push(i);
          }
        },
        error: (err) => {
          console.log(err);
          this.error = err.error.message;
        }
      }
    );
    this.error = null;
  }

  delete(id: number) {
    if (confirm("Are you sure to delete it?")) {
      this.variantService.deleteVariant(id).subscribe({
        next: res => {
          this.getToken();
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

  pagination() {
    this.route.queryParams.subscribe(params => {
      const pageNo = params['pageNo'];
      this.getToken(null, pageNo);
    });
  }

}
