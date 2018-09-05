import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteReportMobileComponent } from './waste-report-mobile.component';

describe('WasteReportMobileComponent', () => {
  let component: WasteReportMobileComponent;
  let fixture: ComponentFixture<WasteReportMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasteReportMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasteReportMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
