import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureReportMobileComponent } from './temperature-report-mobile.component';

describe('TemperatureReportMobileComponent', () => {
  let component: TemperatureReportMobileComponent;
  let fixture: ComponentFixture<TemperatureReportMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureReportMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureReportMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
