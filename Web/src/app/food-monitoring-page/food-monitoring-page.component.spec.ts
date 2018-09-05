import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMonitoringPageComponent } from './food-monitoring-page.component';

describe('FoodMonitoringPageComponent', () => {
  let component: FoodMonitoringPageComponent;
  let fixture: ComponentFixture<FoodMonitoringPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMonitoringPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMonitoringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
