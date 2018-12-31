import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchdulesComponent } from './schdules.component';

describe('SchdulesComponent', () => {
  let component: SchdulesComponent;
  let fixture: ComponentFixture<SchdulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchdulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchdulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
