import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAuthEmployeeComponent } from './menu-auth-employee.component';

describe('MenuAuthEmployeeComponent', () => {
  let component: MenuAuthEmployeeComponent;
  let fixture: ComponentFixture<MenuAuthEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAuthEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAuthEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
