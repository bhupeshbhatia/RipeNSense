import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNoAuthComponent } from './menu-no-auth.component';

describe('MenuNoAuthComponent', () => {
  let component: MenuNoAuthComponent;
  let fixture: ComponentFixture<MenuNoAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNoAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
