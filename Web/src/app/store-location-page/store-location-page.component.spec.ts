import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLocationPageComponent } from './store-location-page.component';

describe('StoreLocationPageComponent', () => {
  let component: StoreLocationPageComponent;
  let fixture: ComponentFixture<StoreLocationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreLocationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
