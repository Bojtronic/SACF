import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransferenciaComponent } from './new-transferencia.component';

describe('TransferenciaComponent', () => {
  let component: NewTransferenciaComponent;
  let fixture: ComponentFixture<NewTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
