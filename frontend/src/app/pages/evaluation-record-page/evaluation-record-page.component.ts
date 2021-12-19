import { Component, OnInit } from '@angular/core';
import { EvaluationRecordService } from "../../services/evaluationRecord.service";
import { EvaluationRecord } from "../../models/EvaluationRecord";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-evaluation-record-page',
  templateUrl: './evaluation-record-page.component.html',
  styleUrls: ['./evaluation-record-page.component.css']
})

export class EvaluationRecordPageComponent implements OnInit {

  evaluationRecord: EvaluationRecord[];
  displayedColumns: string[] = ['sid', 'productList','socialPerformance',];


  constructor(private evaluationRecordService: EvaluationRecordService) { }

  ngOnInit(): void {
    this.evaluationRecordService.getAllEvaluationRecord().subscribe(
      (data: EvaluationRecord[]) => {
        this.evaluationRecord = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );

  }

}
