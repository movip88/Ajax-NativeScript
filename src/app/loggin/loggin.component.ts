import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/UserService';
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css', "./../style.css"],
  moduleId: module.id,
  providers:[UserService]
})
export class LogginComponent implements OnInit {
  loginUsuario: User = new User();

  constructor(private _userService : UserService, private router: RouterExtensions) { }

  ngOnInit() {
  }

  iniciaSesion(){
    this._userService.logUser(this.loginUsuario).subscribe(
      (resp) => {
          let respuesta = <User>resp["resposta"];
          if(respuesta != null){
            appSettings.setString("idUser", respuesta.id);
            this.router.navigateByUrl("tabBar");
          }else{
            dialogs.alert({
              title: "Error al hacer log in",
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
