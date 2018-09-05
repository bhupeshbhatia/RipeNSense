import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsMobileComponent } from './statistics-mobile.component';

describe('StatisticsMobileComponent', () => {
  let component: StatisticsMobileComponent;
  let fixture: ComponentFixture<StatisticsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
