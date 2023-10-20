import { Component, OnInit } from '@angular/core';
import { CommandService } from '../command.service';
import { Router } from '@angular/router';
import { Command } from 'src/app/components/models/Command/command';
import { JwtServiceService } from 'src/app/components/services/jwt-service.service';

@Component({
  selector: 'app-my-commands',
  templateUrl: './my-commands.component.html',
  styleUrls: ['./my-commands.component.css']
})
export class MyCommandsComponent implements OnInit {

  commands: Command[]; 
  //idUser : number =1;
  idUser :any ;
  token = localStorage.getItem('token');
  decodedToken : any;
  constructor(private commandService: CommandService,private router:Router, private jwtService:JwtServiceService) { } 

  ngOnInit(): void {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);
   }


    this.getCommands(this.idUser); 

  }

  private getCommands(idUser: number){
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);
   }
    this.commandService.getMyCommands(idUser).subscribe(data => {
      this.commands = data;
    });
  }



}
