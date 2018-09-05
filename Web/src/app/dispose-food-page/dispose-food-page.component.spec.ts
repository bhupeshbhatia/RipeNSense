import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposeFoodPageComponent } from './dispose-food-page.component';

describe('DisposeFoodPageComponent', () => {
  let component: DisposeFoodPageComponent;
  let fixture: ComponentFixture<DisposeFoodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposeFoodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposeFoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
