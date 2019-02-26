import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Publicacion } from "../model/Publication";

@Injectable()
export class PublicationService{

    constructor(private http:HttpClient){}

    private createRequestHeader() {
        let headers = new HttpHeaders({ "AuthKey":"my-key","AuthToken":"my-token", "Content-Type":"application/json",});
        return headers;
    }

    addPublication(publicacion:Publicacion){
        let serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/publication/";
        return this.http.post(serverUrl, publicacion, {headers: this.createRequestHeader()});
    }

    getPublication(){
        let serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/publication/";
        return this.http.get(serverUrl, {headers: this.createRequestHeader()});
    }
}