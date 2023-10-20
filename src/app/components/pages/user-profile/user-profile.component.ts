import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtServiceService } from '../../services/jwt-service.service';
import { User } from '../../models/user/user';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  user: User;
  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;
  role:any;
  editing: boolean = false;
  public editUser?: User;


  constructor(private jwtService:JwtServiceService ,private userService: UserService) {}

  ngOnInit(): void {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);

   }

   this.userService.getUserById(this.idUser).subscribe(
    (data) => {
      this.user = data;
      this.editUser = this.user;
    },
    (error) => {
      console.error(error);
    }
  );

 
  }
  public OnDetailsUser(idUser: number){
    this.userService.getUserById(idUser).subscribe(
      (response: User) => {
        this.editUser = response;
        console.log(response);
      }
    );
  }




  edit() {
    this.editing = !this.editing;
  }

  /*public onUpdateUser(user: User) {
    this.userService.updateUser(this.user).subscribe(
      (user: User) => {
        console.log(user);
      },(error) => {
        //alert(error.message);
      if (error.status === 403) {
        alert('Your are not authorized to do this action .');
       // this.toast.error({detail:'Error',summary:'Your are not authorized to do this action .',position:'tr',duration:3000})
  
      } else  {
        alert('Something wrong !');}
       // this.toast.error({detail:'Error',summary:'Something wrong !',position:'tr',duration:2000})    }
      }
    );
  }*/

  onUpdateUser() {
    this.userService.updateUser(this.user).subscribe(
      (user: User) => {
        console.log(user);
        this.editing = false;
      },
      (error) => {
        if (error.status === 403) {
          alert('Your are not authorized to do this action .');
        } else {
          alert('Something wrong !');
        }
      }
    );
  }





}
