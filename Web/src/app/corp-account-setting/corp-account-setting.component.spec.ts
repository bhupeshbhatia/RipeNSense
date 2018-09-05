import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpAccountSettingComponent } from './corp-account-setting.component';

describe('CorpAccountSettingComponent', () => {
  let component: CorpAccountSettingComponent;
  let fixture: ComponentFixture<CorpAccountSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpAccountSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpAccountSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
