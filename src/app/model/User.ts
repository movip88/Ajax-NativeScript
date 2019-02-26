export class User{
    id: string;
    nombre: string;
    pass: string;
    about: string;

    constructor(nombre:string="", pass:string="", about:string=""){
        this.nombre = nombre;
        this.pass = pass;
        this.about = about;
    }
}