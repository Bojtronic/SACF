import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {
    }

  ngOnInit(): void {
  }

  hide = true;


  public enter(user: string, password: string) {
    if(user=="admin" && password=="xxx"){
      this.router.navigate(['/dashboard']); 
    }
    else{
      console.log("usuario no permitido")

    }
         
  }
}
