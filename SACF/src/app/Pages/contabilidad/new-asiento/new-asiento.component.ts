import { Component } from '@angular/core';
import { AsientoService } from 'src/app/Services/Asiento/asiento.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';
import { Asiento } from 'src/app/Models/Asiento';
import { DateAdapter } from '@angular/material/core';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-new-asiento',
  templateUrl: './new-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})



export class NewAsientoComponent {

  consecutivo_asiento: string = "";
  Asientos: Asiento[] = [];
  today = new Date(new Date().getTime());




  constructor(private dateAdapter: DateAdapter<Date>, public dialog: MatDialog, private asientoService: AsientoService, private cuentaService: CuentaService, private proveedorService: ProveedorService, private router: Router) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(): void {
    this.asientoService.getAsientos().subscribe(data => {
      this.Asientos = data as Asiento[];
      this.consecutivo_asiento = (this.Asientos.length).toString();

    })
  }

  toDashboard() {
    this.router.navigate(['/dashboard']);
  }

  toAllAsientos() {
    this.router.navigate(['/allasientos']);
  }

  consecutivo() {
    return (this.Asientos.length + 1).toString();
  }
}

