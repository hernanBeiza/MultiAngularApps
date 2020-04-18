import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private actual:string = "";

  constructor(private router:Router) { }

  ngOnInit() { }

  public irProveer():void {
    this.actual = "proveer";
    this.router.navigateByUrl("notificaciones/bandeja/proveer?id=1");
  }

  public irFirmar():void {
    this.actual = "firmar";
    this.router.navigateByUrl("notificaciones/bandeja/firmar?id=2");
  }


  public isActive(seccion:string):boolean {
    if(this.actual == seccion){
      return true;
    }
    return false;
  }

}