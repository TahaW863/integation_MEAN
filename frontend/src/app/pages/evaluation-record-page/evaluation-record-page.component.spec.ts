import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvaluationRecordPageComponent } from './evaluation-record-page.component';

describe('EvaluationRecordComponent', () => {
  let component: EvaluationRecordPageComponent;
  let fixture: ComponentFixture<EvaluationRecordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationRecordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
