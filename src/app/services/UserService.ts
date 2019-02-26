import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/User";

@Injectable()
export class UserService{

    constructor(private http:HttpClient){}

    private createRequestHeader() {
        let headers = new HttpHeaders({ "AuthKey":"my-key","AuthToken":"my-token", "Content-Type":"application/json",});
        return headers;
    }

    registerUser(user:User){
        let serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/users/";
        return this.http.post(serverUrl, user, {headers: this.createRequestHeader()});
    }

    updateUser(user:User){
        let serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/users/"+user.id;
        return this.http.post(serverUrl, user, {headers: this.createRequestHeader()});
    }

    logUser(user:User){
        let serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/autentificateUser/";
        return this.http.post(serverUrl, user, {headers: this.createRequestHeader()});
    }

    getUser(id:string){
        let serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/user/"+id;
        return this.http.get(serverUrl, {headers: this.createRequestHeader()});
    }

    delUser(id:string){
        let serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/user_delete/"+id;
        return this.http.get(serverUrl, {headers: this.createRequestHeader()});
    }
}