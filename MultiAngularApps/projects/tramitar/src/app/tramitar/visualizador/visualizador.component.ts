import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.scss']
})
export class VisualizadorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("VisualizadorComponent");
  }

  public irAgregarResolucion():void {
    this.router.navigateByUrl("tramitar/visualizador/resolucion/agregar");
  }

}
