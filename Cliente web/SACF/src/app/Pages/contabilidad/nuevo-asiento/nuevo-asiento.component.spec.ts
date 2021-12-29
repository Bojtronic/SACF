import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAsientoComponent } from './nuevo-asiento.component';

describe('NuevoAsientoComponent', () => {
  let component: NuevoAsientoComponent;
  let fixture: ComponentFixture<NuevoAsientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAsientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
