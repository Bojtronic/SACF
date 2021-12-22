import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {
    this.closeSystem() //saca de la base de datos los datos de usuarios logeados
   }

  ngOnInit(): void {
  }

  public closeSystem(){

  }

  

  public enterIntoSystem(login:Login) {
    if(login.user=="admin" && login.password=="xxx"){
      this.router.navigate(['/dashboard']); 
    }
    else{

    }
         
  }

}
