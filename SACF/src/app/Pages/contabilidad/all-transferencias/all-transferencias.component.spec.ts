import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransferenciasComponent } from './all-transferencias.component';

describe('AllTransferenciasComponent', () => {
  let component: AllTransferenciasComponent;
  let fixture: ComponentFixture<AllTransferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTransferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
