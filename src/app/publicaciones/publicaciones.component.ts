import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../services/PublicationService';
import { Publicacion } from '../model/Publication';
import { setInterval, clearInterval } from "tns-core-modules/timer";

@Component({
  selector: 'ns-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
  moduleId: module.id,
  providers: [PublicationService]
})
export class PublicacionesComponent implements OnInit {
  publicaciones:Publicacion[] = [];

  constructor(private _publicationService:PublicationService) { }

  ngOnInit() {
    setInterval(() => {
      this.updateProducts();
    }, 1000);
  }

  updateProducts(){
    this._publicationService.getPublication().subscribe(
      (resp) => {
        this.publicaciones = <Publicacion[]>resp["resposta"];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
