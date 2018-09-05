import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureSummaryComponent } from './temperature-summary.component';

describe('TemperatureSummaryComponent', () => {
  let component: TemperatureSummaryComponent;
  let fixture: ComponentFixture<TemperatureSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
