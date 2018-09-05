import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermissionsPageComponent } from './user-permissions-page.component';

describe('UserPermissionsPageComponent', () => {
  let component: UserPermissionsPageComponent;
  let fixture: ComponentFixture<UserPermissionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPermissionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPermissionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
