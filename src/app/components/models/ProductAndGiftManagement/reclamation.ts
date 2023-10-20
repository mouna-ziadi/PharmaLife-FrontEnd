import { Product } from "./product";
import { User } from "../user/user";

export class Reclamation {
    idReclamation:number;
    descriptionReclamation:String;
    dateReclamation:String;
    archived:number;

    //NoSQL
    idUser:number;
    idProduct:number;

    userProduct:User;
    product:Product;



}
