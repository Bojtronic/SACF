import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDepositoComponent } from './new-deposito.component';

describe('DepositoComponent', () => {
  let component: NewDepositoComponent;
  let fixture: ComponentFixture<NewDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDepositoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
