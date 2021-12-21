import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user="";
  password="";

  constructor(private router:Router) {
    this.closeSystem() //saca de la base de datos los datos de usuarios logeados
   }

  ngOnInit(): void {
  }

  public closeSystem(){

  }

  

  public enterIntoSystem(logUser:NgForm) { 
    this.router.navigate(['/piechart']);     
  }

}
