import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthyleneSummaryComponent } from './ethylene-summary.component';

describe('EthyleneSummaryComponent', () => {
  let component: EthyleneSummaryComponent;
  let fixture: ComponentFixture<EthyleneSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthyleneSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthyleneSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
