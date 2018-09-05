import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDetailedReportComponent } from './sensor-detailed-report.component';

describe('SensorDetailedReportComponent', () => {
  let component: SensorDetailedReportComponent;
  let fixture: ComponentFixture<SensorDetailedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorDetailedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorDetailedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
