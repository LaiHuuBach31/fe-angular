import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit{

  errors:any;
  id:any;

  ngOnInit(): void {
    this.id = this.routers.snapshot.params['id'];
    this.categoryService.getCategoryId(this.id).subscribe(res=>{
      this.formData.patchValue(res.data);
    })
  }

  constructor(private categoryService: CategoryService, private router: Router, private routers: ActivatedRoute){}

  formData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    status: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.categoryService.updateCategory(this.id, this.formData.value).subscribe({ 
      next: (res) => {
     
        console.log(res);
        this.router.navigate(['/admin/category/list']);
        this.logInSuccessful();
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  get f(): any {
    return this.formData.controls;
  }

  logInSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Update category Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
