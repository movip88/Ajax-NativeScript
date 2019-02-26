import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../model/Publication';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { PublicationService } from '../services/PublicationService';
import * as appSettings from "tns-core-modules/application-settings";
import { User } from '../model/User';

@Component({
  selector: 'ns-subir-pubicacin',
  templateUrl: './subir-pubicacin.component.html',
  styleUrls: ['./subir-pubicacin.component.css', "./../style.css"],
  moduleId: module.id,
  providers: [PublicationService]
})
export class SubirPubicacinComponent implements OnInit {
  publicacion:Publicacion = new Publicacion();

  constructor(private _publicationService:PublicationService) { }

  ngOnInit() {
  }

  uploadPublication(){
    this.publicacion.user.id = appSettings.getString("idUser", "-50");
    this._publicationService.addPublication(this.publicacion).subscribe(
      (resp) => {
        let respuesta = <boolean>resp["resposta"];
        if(respuesta){
          dialogs.alert({
            title: "Info",
            message: "Publicación Subida correctamente",
            okButtonText: "OK"
          }).then(() => {
            this.publicacion = new Publicacion();
          });
        }else{
          dialogs.alert({
            title: "Error",
            message: resp["errorMessage"],
            okButtonText: "Aceptar"
          });
        }
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
