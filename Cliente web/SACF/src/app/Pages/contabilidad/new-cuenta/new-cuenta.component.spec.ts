import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCuentaComponent } from './new-cuenta.component';

describe('NewCuentaComponent', () => {
  let component: NewCuentaComponent;
  let fixture: ComponentFixture<NewCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
