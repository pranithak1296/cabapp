import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulecabComponent } from './schedulecab.component';

describe('SchedulecabComponent', () => {
  let component: SchedulecabComponent;
  let fixture: ComponentFixture<SchedulecabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulecabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulecabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
