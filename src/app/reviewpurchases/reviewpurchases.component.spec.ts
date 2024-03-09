import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewpurchasesComponent } from './reviewpurchases.component';

describe('ReviewpurchasesComponent', () => {
  let component: ReviewpurchasesComponent;
  let fixture: ComponentFixture<ReviewpurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewpurchasesComponent]
    });
    fixture = TestBed.createComponent(ReviewpurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
