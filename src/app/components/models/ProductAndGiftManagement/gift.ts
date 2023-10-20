import { Product } from "./product";
import { User } from "../user/user"; 

export class Gift {
    idGift:number;
    beginsAtGift:Date;
    endsAtGift:Date;
    productsGift:Product[];
    userGift:User;
    description:String;
    quantityGift:number;


}
