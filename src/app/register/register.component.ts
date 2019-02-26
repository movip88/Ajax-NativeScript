import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/UserService';
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../style.css'],
  moduleId: module.id,
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  nuevoUsuario: User = new User();

  constructor(private _userService : UserService, private router: RouterExtensions){}

  ngOnInit() {
    if(appSettings.getString("idUser", "-50") != "-50"){
      this.router.navigateByUrl("tabBar");
    }
  }

  registrarse(){
    this._userService.registerUser(this.nuevoUsuario).subscribe(
      (resp) => {
          let respuesta = <boolean>resp["resposta"];
          if(respuesta){
            this.router.navigateByUrl("loggin");
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
}
