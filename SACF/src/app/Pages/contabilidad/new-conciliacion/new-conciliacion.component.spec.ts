import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConciliacionComponent } from './new-conciliacion.component';

describe('NewConciliacionComponent', () => {
  let component: NewConciliacionComponent;
  let fixture: ComponentFixture<NewConciliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConciliacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConciliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
