import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
 
  public errors: any;
 
  constructor(
      private userService: UserService, 
      private router: Router
  ) { }

  ngOnInit(): void {
      
  }

  formData = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      enabled: new FormControl('', [Validators.required]),
  });


  onSubmit() {
      this.userService.addUser(this.formData.value).subscribe({
          next: (res) => {
              this.router.navigate(['/admin/user/list']);
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
          title: 'Create user Successfully',
          showConfirmButton: false,
          timer: 1000
      })
  }

  
  
}
