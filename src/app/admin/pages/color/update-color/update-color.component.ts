import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService } from 'src/app/service/color.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-color',
  templateUrl: './update-color.component.html',
  styleUrls: ['./update-color.component.scss']
})
export class UpdateColorComponent implements OnInit{

  errors:any;
  id:any;

  ngOnInit(): void {
    this.id = this.routers.snapshot.params['id'];
    this.colorService.getColorId(this.id).subscribe(res=>{
      this.formData.patchValue(res.data);
    })
  }

  constructor(private colorService: ColorService, private router: Router, private routers: ActivatedRoute){}

  formData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    status: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.colorService.updateColor(this.id, this.formData.value).subscribe({ 
      next: (res) => {
     
        console.log(res);
        this.router.navigate(['/admin/color/list']);
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
