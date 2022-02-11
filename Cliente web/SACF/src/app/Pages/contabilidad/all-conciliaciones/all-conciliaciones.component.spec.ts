import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConciliacionesComponent } from './all-conciliaciones.component';

describe('AllConciliacionesComponent', () => {
  let component: AllConciliacionesComponent;
  let fixture: ComponentFixture<AllConciliacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllConciliacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllConciliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
