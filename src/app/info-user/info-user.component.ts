import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/UserService';
import * as appSettings from "tns-core-modules/application-settings";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'ns-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css', "./../style.css"],
  moduleId: module.id,
  providers:[UserService]
})
export class InfoUserComponent implements OnInit {
  user:User = new User();

  constructor(private _userService:UserService, private router: RouterExtensions) { }

  ngOnInit() {
    this._userService.getUser(appSettings.getString("idUser", "-50")).subscribe(
      (resp) => {
        let respuesta = <User>resp["resposta"];
        if(respuesta != null){
          this.user = respuesta;
        }else{
          dialogs.alert({
            title: resp["errorMessage"],
            message: "Error al descargar tu información..., vuelve a iniciar sesion porfavor...",
            okButtonText: "Aceptar"
          }).then(() => {
            appSettings.clear();
            this.router.navigateByUrl("loggin");
          });
        }
      },
      (error) => {
        console.log(error)
      }
    );
  }

  updateUser(){
    this._userService.updateUser(this.user).subscribe(
      (resp) => {
        let respuesta = <boolean>resp["resposta"];
        if(respuesta){
          dialogs.alert({
            title: "Info",
            message: "Usuario actualizado correctamente!!",
            okButtonText: "OK"
          });
        }else{
          dialogs.alert({
            title: "Error al registrar",
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

  closeSession(){
    appSettings.clear();
    this.router.navigateByUrl("loggin");
  }

  eliminarUsuario(){
    this._userService.delUser(this.user.id).subscribe(
      (resp) => {
        let respuesta = <boolean>resp["resposta"];
        if(respuesta){
          dialogs.alert({
            title: "Info",
            message: "Cuenta borrada correctamente",
            okButtonText: "OK"
          }).then(() => {
            appSettings.clear();
            this.router.navigateByUrl("register");
          });
        }else{
          dialogs.alert({
            title: "Error al borrar",
            message: resp["errorMessage"],
            okButtonText: "Aceptar"
          });
        }
      },
      (error) => {
        console.log(error);
      }
      );
  }
}
