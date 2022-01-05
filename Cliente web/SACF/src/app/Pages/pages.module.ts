import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoAsientoComponent } from './contabilidad/nuevo-asiento/nuevo-asiento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    NuevoAsientoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ]
})
export class PagesModule { }
