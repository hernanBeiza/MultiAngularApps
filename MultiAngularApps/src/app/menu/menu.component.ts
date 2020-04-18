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

  public irNotificaciones():void {
    this.actual = "notificaciones";
    this.router.navigateByUrl("notificaciones");
  }

  public irTramitar():void {
    this.actual = "tramitar";
    this.router.navigateByUrl("tramitar");
  }


  public isActive(seccion:string):boolean {
    if(this.actual == seccion){
      return true;
    }
    return false;
  }

}