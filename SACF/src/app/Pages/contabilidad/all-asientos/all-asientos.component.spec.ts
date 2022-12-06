import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAsientosComponent } from './all-asientos.component';

describe('AllAsientosComponent', () => {
  let component: AllAsientosComponent;
  let fixture: ComponentFixture<AllAsientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAsientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
