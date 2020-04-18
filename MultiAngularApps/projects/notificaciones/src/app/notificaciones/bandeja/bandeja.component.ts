import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.scss']
})
export class BandejaComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // Route parameters
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
    });

    // URL query parameters
    this.activatedRoute.queryParams.subscribe( params => {
      console.log(params);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        console.log(this.activatedRoute.snapshot.paramMap.get("filtro"));

        /*
        let url = event.url.split("/");
        console.log(url[url.length-1]);
        */
      }
    });
    
  }

}
