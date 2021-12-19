import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManEvaluationViewPageComponent } from './sales-man-evaluation-view-page.component';

describe('SalesManEvaluationViewPageComponent', () => {
  let component: SalesManEvaluationViewPageComponent;
  let fixture: ComponentFixture<SalesManEvaluationViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesManEvaluationViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesManEvaluationViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
