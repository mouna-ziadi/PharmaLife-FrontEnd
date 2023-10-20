import { Component, OnInit } from '@angular/core';
import { Association } from '../../models/AssociationDonation/association';
import { AssociationService } from './association.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

  page: number = 1;

  associations: Association[];
  public detailsAssociation?: Association;
  constructor(private associationService: AssociationService) { }

  ngOnInit(): void {
    this.getAssociations();
  }
  private getAssociations(){
    this.associationService.getAssociationList().subscribe(data => { 
      this.associations = data;
    });
   
  } 
  
  ////////////////////////mathezouch


  public OnDetailsAssociation(idAssociation: number){
    this.associationService.getAssociationById(idAssociation).subscribe(
      (response: Association) => {
        console.log(response);
      });
  }


  
  public onOpenModal(association: Association, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   
    if (mode === 'details') {
       this.detailsAssociation = association;
      button.setAttribute('data-target', '#detailAssociationModal');
    }
  
    container?.appendChild(button);
    button.click();
  }


}
