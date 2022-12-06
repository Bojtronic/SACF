import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { TransferenciaService } from 'src/app/Services/Transferencia/transferencia.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  hide = true;


  public enter(user: string, password: string) {
    if (user == "admin" && password == "xxx") {
      this.router.navigate(['/dashboard']);
    }
    else {
      console.log("usuario no permitido")

    }

  };


}
