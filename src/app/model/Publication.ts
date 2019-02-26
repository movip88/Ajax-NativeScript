import { User } from "./User";

export class Publicacion{
    id:string;
    message:string;
    image:string;
    user:User;

    constructor(id:string="", message:string="",image:string="", user:User= new User()){
        this.id = id;
        this.message = message;
        this.image = image;
        this.user = user;
    }
}