import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisposalComponent } from './add-disposal.component';

describe('AddDisposalComponent', () => {
  let component: AddDisposalComponent;
  let fixture: ComponentFixture<AddDisposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
