import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorService } from 'src/app/service/color.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-color',
  templateUrl: './create-color.component.html',
  styleUrls: ['./create-color.component.scss']
})
export class CreateColorComponent implements OnInit{

  public errors:any;

  ngOnInit(): void {
    
  }

  constructor(private colorService: ColorService, private router: Router){}

  formData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    status: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.colorService.addColor(this.formData.value).subscribe({
      next: (res) => {
        this.router.navigate(['/admin/color/list']);
        this.Successful();
      },
      error: (err) => {
        this.errors = err.error.message;
      }
    })
  }

  get f(): any {
    return this.formData.controls;
  }

  Successful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Create category Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
