import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDisposalComponent } from './update-disposal.component';

describe('UpdateDisposalComponent', () => {
  let component: UpdateDisposalComponent;
  let fixture: ComponentFixture<UpdateDisposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDisposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
