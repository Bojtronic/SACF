import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasXCobrarComponent } from './cuentas-x-cobrar.component';

describe('CuentasXCobrarComponent', () => {
  let component: CuentasXCobrarComponent;
  let fixture: ComponentFixture<CuentasXCobrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasXCobrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasXCobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
