import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayhotdealsComponent } from './todayhotdeals.component';

describe('TodayhotdealsComponent', () => {
  let component: TodayhotdealsComponent;
  let fixture: ComponentFixture<TodayhotdealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayhotdealsComponent]
    });
    fixture = TestBed.createComponent(TodayhotdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
