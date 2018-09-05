import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlashSaleComponent } from './update-flash-sale.component';

describe('UpdateFlashSaleComponent', () => {
  let component: UpdateFlashSaleComponent;
  let fixture: ComponentFixture<UpdateFlashSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFlashSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFlashSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
