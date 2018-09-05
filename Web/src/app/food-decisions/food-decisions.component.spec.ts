import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDecisionsComponent } from './food-decisions.component';

describe('FoodDecisionsComponent', () => {
  let component: FoodDecisionsComponent;
  let fixture: ComponentFixture<FoodDecisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDecisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDecisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
