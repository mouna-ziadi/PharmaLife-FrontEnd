import { Association } from "./association";

export class Request {
    idRequest: number;
    nameRequest: string;
    descriptionRequest: string;
    requestType: string;
    dateRequest: Date;
    statusRequest: string; 
    association: Association[];
}
