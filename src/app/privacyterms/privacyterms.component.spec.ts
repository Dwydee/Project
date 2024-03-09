import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacytermsComponent } from './privacyterms.component';

describe('PrivacytermsComponent', () => {
  let component: PrivacytermsComponent;
  let fixture: ComponentFixture<PrivacytermsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacytermsComponent]
    });
    fixture = TestBed.createComponent(PrivacytermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
