import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, of, switchMap, throwError } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: boolean = false;

  ngOnInit(): void {
   
  }

  constructor(private authService : AuthService, private router: Router){}

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    this.authService.onLogin(this.formLogin.value).subscribe({
      next: (res) => {
        if(res.data){
          sessionStorage.setItem('token', res.data.access_token)
          this.logInSuccessful();
          this.router.navigate(['/admin']);
        }
      },
      error: (err) => {
        this.loginError = true;
      },
    })
  }

  get f(): any {
    return this.formLogin.controls;
  }

  logInSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Login Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
  
}
