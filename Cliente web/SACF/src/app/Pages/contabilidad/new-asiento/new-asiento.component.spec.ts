import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsientoComponent } from './new-asiento.component';

describe('NuevoAsientoComponent', () => {
  let component: NewAsientoComponent;
  let fixture: ComponentFixture<NewAsientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAsientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
