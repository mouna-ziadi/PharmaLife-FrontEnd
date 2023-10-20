import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/user/user-login';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserLogin = new UserLogin();
  formModel: any = {};

  constructor(private fb: FormBuilder, private service: LoginService, private route: Router) {}
  /*  formModel = {
      email: '',
      password: ''
    }  */

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
   // alert("you are not allowed")
    this.route.navigateByUrl('');
    }

    this.formModel = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

 /* onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.login(form.value).subscribe(
      (res: any) => {
        console.log(res)
        console.log(res.access_token)
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('username', res.user);
        alert("Welcome")
        this.route.navigateByUrl('');       
      }
      ,error=>{
        alert(console.log() )
        this.route.navigate(['/login']);
  
      
      });
  }*/
  onSubmit() {
    if (this.formModel.valid) {
      this.service.login(this.formModel.value).subscribe(
        (res: any) => {
          localStorage.setItem('token', res.access_token);
          alert("You are successfully logged in !");
          this.route.navigateByUrl('');       
        },
        (error) => {
          // handle login error
          if (error.status === 401 && error.error === 'Invalid email/password') {
            alert("Invalid email/password. Please try again.");

          } else if (error.status === 401 && error.error === 'Your account is not enabled. Please verify your account.') {
            alert("Your account is not enabled. Please verify your account.");

          } else  {
            alert("Your account has been locked for 24 Hours");
          } 
          
        this.route.navigate(['/login']);
        }
      );
    }
  }

  onLogout() {
    localStorage.removeItem('token');  
    this.route.navigate(['/login']);
  }
}