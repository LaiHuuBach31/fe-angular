import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SizeService } from 'src/app/service/size.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-size',
  templateUrl: './update-size.component.html',
  styleUrls: ['./update-size.component.scss']
})
export class UpdateSizeComponent implements OnInit {

  errors:any;
  id:any;

  ngOnInit(): void {
    this.id = this.routers.snapshot.params['id'];
    this.sizeService.getSizeId(this.id).subscribe(res=>{
      console.log(res);
      
      this.formData.patchValue(res.data);
    })
  }

  constructor(private sizeService: SizeService, private router: Router, private routers: ActivatedRoute){}

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.sizeService.updateSize(this.id, this.formData.value).subscribe({ 
      next: (res) => {
     
        console.log(res);
        this.router.navigate(['/admin/size/list']);
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
