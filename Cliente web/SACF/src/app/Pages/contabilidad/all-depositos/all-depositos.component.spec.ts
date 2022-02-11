import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDepositosComponent } from './all-depositos.component';

describe('AllDepositosComponent', () => {
  let component: AllDepositosComponent;
  let fixture: ComponentFixture<AllDepositosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDepositosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDepositosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
