import { Component, OnInit } from '@angular/core';
import { CommandService } from './command.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Command } from '../../models/Command/command';
import { JwtServiceService } from '../../services/jwt-service.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})

export class CommandComponent implements OnInit {
  idProduct: number;
  command: Command = new Command();
  idUser :any ;
  token = localStorage.getItem('token');
  decodedToken : any;

  constructor(private commandService: CommandService,
    private router:Router,private route:ActivatedRoute, private jwtService:JwtServiceService) { } 

  ngOnInit(): void {
    this.idProduct = this.route.snapshot.params['idProduct'];

    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);
   }

  }

  saveCommand1(){
    this.commandService.createCommand(this.command).subscribe(data =>{
      console.log(data);
      this.goToProductList();
    },
    error => console.log(error)
    
    );
  }  

  saveCommand(){
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      console.log(this.idUser);
   }
    this.commandService.assignCommandToProduct(this.command, this.idProduct, this.idUser ).subscribe(data =>{
      console.log(data);
      this.goToProductList();
    },
    error => console.log(error)
    
    );
  }  

  goToProductList(){
    this.router.navigate(['/product-management']);
  }

  onSubmit(){
    console.log(this.command);
    this.saveCommand();
    alert("Your is command Added Successfully !");
    this.goToProductList();
  }

}
