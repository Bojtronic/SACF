import { Component } from '@angular/core';
import { AsientoService } from 'src/app/Services/Asiento/asiento.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';
import { Asiento } from 'src/app/Models/Asiento';
import { DateAdapter } from '@angular/material/core';
import { Cuenta } from 'src/app/Models/Cuenta';


@Component({
  selector: 'app-new-asiento',
  templateUrl: './new-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})



export class NewAsientoComponent {

  consecutivo_asiento: string = "";
  Asientos: Asiento[] = [];
  today = new Date(new Date().getTime());

  cuentas: Cuenta[] = [];




  constructor(private dateAdapter: DateAdapter<Date>, private cuentaService: CuentaService, private router: Router) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(): void {
    /*
    this.asientoService.getAsientos().subscribe(data => {
      this.Asientos = data as Asiento[];
      this.consecutivo_asiento = (this.Asientos.length).toString();

    })
    */
  }

  toDashboard() {
    this.router.navigate(['/dashboard']);
  }

  toAllAsientos() {
    this.router.navigate(['/allasientos']);
  }

  toAudit() {
    this.router.navigate(['/audit']);
  }

  consecutivo() {
    return (this.Asientos.length + 1).toString();
  }


}

