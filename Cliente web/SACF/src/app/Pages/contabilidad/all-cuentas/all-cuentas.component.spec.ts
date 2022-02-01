import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCuentasComponent } from './all-cuentas.component';

describe('AllCuentasComponent', () => {
  let component: AllCuentasComponent;
  let fixture: ComponentFixture<AllCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
