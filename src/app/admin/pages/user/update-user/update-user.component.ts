import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit{
  public errors: any;
  public id:any;
 
  constructor(
      private userService: UserService, 
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserId(this.id).subscribe(
      res =>{
        this.formData.patchValue(res.data);
      }
    )
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
      this.userService.updateUser(this.id, this.formData.value).subscribe({
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
          title: 'Update user Successfully',
          showConfirmButton: false,
          timer: 1000
      })
  }

}
