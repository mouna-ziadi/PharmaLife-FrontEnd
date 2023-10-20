import { Evenement } from "./event";
import { User } from "../user/user";

export class Reservation {
    idReservation?: number;
    dateReservation: Date;
    userReservation: User;
    event: Evenement[];
    codeReservation?: number;
    idEvent:number;
    idUser:number;
}
