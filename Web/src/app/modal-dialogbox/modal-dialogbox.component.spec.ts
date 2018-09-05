import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogboxComponent } from './modal-dialogbox.component';

describe('ModalDialogboxComponent', () => {
  let component: ModalDialogboxComponent;
  let fixture: ComponentFixture<ModalDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
