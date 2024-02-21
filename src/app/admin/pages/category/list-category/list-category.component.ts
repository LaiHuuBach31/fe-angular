import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/service/category';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  public categorys: any = [];
  public error :any;
  

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  public getCategory() {
    this.categoryService.getCategory().subscribe(
      (res: any) => {
        this.categorys = res.data.content;
      }
    );
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

  onSubmit(){

  }

  formSearch = new FormGroup({
    keyword: new FormControl('')
  });
}
