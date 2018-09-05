import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedReportMobileComponent } from './detailed-report-mobile.component';

describe('DetailedReportMobileComponent', () => {
  let component: DetailedReportMobileComponent;
  let fixture: ComponentFixture<DetailedReportMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedReportMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedReportMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
