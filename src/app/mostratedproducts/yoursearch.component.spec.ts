import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoursearchComponent } from './yoursearch.component';

describe('YoursearchComponent', () => {
  let component: YoursearchComponent;
  let fixture: ComponentFixture<YoursearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoursearchComponent]
    });
    fixture = TestBed.createComponent(YoursearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
