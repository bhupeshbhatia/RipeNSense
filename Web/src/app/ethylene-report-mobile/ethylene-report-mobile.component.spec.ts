import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthyleneReportMobileComponent } from './ethylene-report-mobile.component';

describe('EthyleneReportMobileComponent', () => {
  let component: EthyleneReportMobileComponent;
  let fixture: ComponentFixture<EthyleneReportMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthyleneReportMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthyleneReportMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
