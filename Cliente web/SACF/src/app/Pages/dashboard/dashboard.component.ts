import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public toNewAsiento() { 
    this.router.navigate(['/newasiento']); 
  }

  x (){
    console.log("No se ha creado la ruta al componente");
  }
}
