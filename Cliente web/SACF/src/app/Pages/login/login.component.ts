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

  hide = true;

  public closeSystem(){

  }

  public enter(user: string, password: string) {
    if(user=="admin" && password=="xxx"){
      this.router.navigate(['/dashboard']); 
    }
    else{
      console.log("usuario no permitido")

    }
         
  }
}
