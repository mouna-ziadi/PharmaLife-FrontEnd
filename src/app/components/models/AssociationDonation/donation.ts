import { User } from "../user/user";

export class Donation {
     idDonation: number;
     nameDonation: string; 
     descriptionDonation: string;
     quantityDonation: number;
     imageDonation: string; 
     dateDonation: Date; 
     donationType: string;
     statusDonation: string;
     idRequest!: number;
     userDonation: User;
}
