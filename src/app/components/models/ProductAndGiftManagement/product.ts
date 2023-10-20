import {Category} from "./category"
import { User } from "../user/user"; 
import { Reclamation } from "./reclamation";



export class Product {
    public idProduct:number ;
    public referenceProduct:String;
    public nameProduct:String;
    public imageProduct:String;
    public descriptionProduct:String ;
    public priceProduct:any ;
    public quantityProduct:any;
    public expired:number;
    public  expirationDateProduct:Date ;
    public userProduct:User  ;
    public categoryProduct:Category ;
    public ReclamationsProduct:Reclamation[];
    public creationDate:Date;

    //nosql
    idCategory:number;
    idUser:number;



}
