import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAuthCorporateComponent } from './menu-auth-corporate.component';

describe('MenuAuthCorporateComponent', () => {
  let component: MenuAuthCorporateComponent;
  let fixture: ComponentFixture<MenuAuthCorporateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAuthCorporateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAuthCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
