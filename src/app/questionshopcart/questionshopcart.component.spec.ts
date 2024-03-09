import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionshopcartComponent } from './questionshopcart.component';

describe('QuestionshopcartComponent', () => {
  let component: QuestionshopcartComponent;
  let fixture: ComponentFixture<QuestionshopcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionshopcartComponent]
    });
    fixture = TestBed.createComponent(QuestionshopcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
