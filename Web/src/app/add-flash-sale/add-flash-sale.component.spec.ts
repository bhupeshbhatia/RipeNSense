import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlashSaleComponent } from './add-flash-sale.component';

describe('AddFlashSaleComponent', () => {
  let component: AddFlashSaleComponent;
  let fixture: ComponentFixture<AddFlashSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlashSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlashSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
