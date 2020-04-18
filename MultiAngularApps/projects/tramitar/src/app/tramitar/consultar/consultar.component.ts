import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {

  public loginForm:FormGroup; 

  constructor(private router:Router, private fb: FormBuilder){ 
    this.loginForm = this.fb.group({

    });
  }
  
  ngOnInit() {
    console.log("ConsultarComponent");
  }

  public onSubmit(values):void {
    console.log("onSubmit();");
    this.router.navigateByUrl("/tramitar/visualizador");
  }

}
