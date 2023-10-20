import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpEventType } from '@angular/common/http';
import { createClient } from '@supabase/supabase-js';
import { HttpClient } from '@angular/common/http';



const supabaseUrl = 'https://nwkxroquvbmhbchbkbjk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53a3hyb3F1dmJtaGJjaGJrYmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMjQ4MTYsImV4cCI6MTk5ODkwMDgxNn0.2JdZTjvuXGIHJ_gfcohLMM-I22pGBSlLEQiNwI9Hoto';

const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User = new User();
  imgURL : any;
  image_user = '';

  public message: string;
  public imagePath : String;
  selectedFile: File;
   selectedFileUrl: string | null = null;
   /////
   avatarUrl: string = '';

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe((data: any)=>{JSON.parse(JSON.stringify(data))
     // this.user('file',this.image_user);      
     alert("Successfully User is register ! Please check your email")
     console.log(data)
     this.route.navigate(['/login']);
    },(error) => {
        if (error.status === 400 && error.error === 'Error: Email is already in use!') {
          alert("Error: Email is already in use!");
        } else {
          alert("Error: Email is already in use!");
        } 
        
    
      }

      //alert("Sorry User not registred please try later")
     // console.log(error)
      //this.route.navigate(['/login']);

      
    );
    
  }


 /* async userRegister() {
    console.log(this.user);
    
    // First, upload the user's image to Supabase
    const { data, error } = await supabase.storage
      .from('user-images')
      .upload('user-image.png', this.image_user);
      
    if (error) {
      console.error(error);
      alert("Sorry, there was an error uploading your image");
      return;
    }
    
    // If the image upload was successful, register the user
    this.userService.registerUser(this.user).subscribe(
      (data: any) => {
        // Registration successful
        alert("Successfully User is register! Please check your email");
        console.log(data);
        this.route.navigate(['/login']);
      },
      error => {
        // Registration failed
        alert("Sorry, user not registered. Please try again later.");
        console.log(error);
      }
    );
  }*/

  onImageSelected(event: { target: { files: any[]; }; }) {
    const file = event.target.files[0];
    this.image_user = file;
  }
}
