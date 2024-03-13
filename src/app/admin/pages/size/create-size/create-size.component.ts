import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SizeService } from 'src/app/service/size.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-size',
  templateUrl: './create-size.component.html',
  styleUrls: ['./create-size.component.scss']
})
export class CreateSizeComponent implements OnInit{

  public errors:any;

  ngOnInit(): void {
    
  }

  constructor(private sizeService: SizeService, private router: Router){}

  formData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    status: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.sizeService.addSize(this.formData.value).subscribe({
      next: (res) => {
        this.router.navigate(['/admin/size/list']);
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
