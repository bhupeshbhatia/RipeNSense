import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMainIconComponent } from './dash-main-icon.component';

describe('DashMainIconComponent', () => {
  let component: DashMainIconComponent;
  let fixture: ComponentFixture<DashMainIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashMainIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashMainIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
