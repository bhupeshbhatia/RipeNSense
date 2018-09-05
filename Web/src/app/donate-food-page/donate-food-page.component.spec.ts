import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateFoodPageComponent } from './donate-food-page.component';

describe('DonateFoodPageComponent', () => {
  let component: DonateFoodPageComponent;
  let fixture: ComponentFixture<DonateFoodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateFoodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateFoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
