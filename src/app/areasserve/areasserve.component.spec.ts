import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasserveComponent } from './areasserve.component';

describe('AreasserveComponent', () => {
  let component: AreasserveComponent;
  let fixture: ComponentFixture<AreasserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
