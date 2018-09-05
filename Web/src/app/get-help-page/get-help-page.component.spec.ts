import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHelpPageComponent } from './get-help-page.component';

describe('GetHelpPageComponent', () => {
  let component: GetHelpPageComponent;
  let fixture: ComponentFixture<GetHelpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHelpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHelpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
