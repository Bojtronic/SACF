import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiTableComponent } from './edi-table.component';

describe('EdiTableComponent', () => {
  let component: EdiTableComponent;
  let fixture: ComponentFixture<EdiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
