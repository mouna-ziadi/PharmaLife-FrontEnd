import { Donation } from "../AssociationDonation/donation";

export class User {
    idUser: number;
    firstName: String;
    lastName: String;
    gender: String;
    birthDate: Date;
    address: String;
    city: String;
    email: String;
    createdAt: Date;
    phoneNumber: number;
    role: String;
    image_user: String;
    locked: Boolean;
    enabled: Boolean;
    password: String;
    donationsUser: Donation;
  }