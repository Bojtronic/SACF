import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasXPagarComponent } from './cuentas-x-pagar.component';

describe('CuentasXPagarComponent', () => {
  let component: CuentasXPagarComponent;
  let fixture: ComponentFixture<CuentasXPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasXPagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasXPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
