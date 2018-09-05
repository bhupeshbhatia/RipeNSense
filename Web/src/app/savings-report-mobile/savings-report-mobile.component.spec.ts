import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsReportMobileComponent } from './savings-report-mobile.component';

describe('SavingsReportMobileComponent', () => {
  let component: SavingsReportMobileComponent;
  let fixture: ComponentFixture<SavingsReportMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsReportMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsReportMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
