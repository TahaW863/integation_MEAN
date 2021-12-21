import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluationRecord } from 'src/app/models/EvaluationRecord';
import { SalesManEvaluationViewService } from 'src/app/services/sales-man-evaluation-view.service';
import { SalesMan } from 'src/app/models/SalesMan';
@Component({
  selector: 'app-sales-man-evaluation-view-page',
  templateUrl: './sales-man-evaluation-view-page.component.html',
  styleUrls: ['./sales-man-evaluation-view-page.component.css']
})

export class SalesManEvaluationViewPageComponent implements OnInit {

  evaluationRecord:EvaluationRecord;
  bonusSalary :Number;
  salesMan:SalesMan ;


  constructor(private route:ActivatedRoute,private SalesManEvaluationService : SalesManEvaluationViewService) { }

  ngOnInit(): void {
    const sid = this.route.snapshot.params['sid'];
      this.bonusSalary = 1;
      this.SalesManEvaluationService.getOneEvaluationRecord(sid).subscribe(
        (data:EvaluationRecord)=>{
          this.evaluationRecord=data;
        }, (error) => {
          console.log(error);
        },
        () => {
          console.log('completed');
          //calculate bonus salary
        }
        );

        this.SalesManEvaluationService.getOneSalesMan(sid).subscribe(
          (data:SalesMan)=>{
            this.salesMan=data;
          }, (error) => {
            console.log(error);
          },
          () => {
            console.log('completed');
            //calculate bonus salary
          }
          );

    }

    calculateBonusSalary (evaluationRecord: EvaluationRecord):number{
      let accumulated:String = "";
      accumulated = evaluationRecord.productList[0].customerList[0].ranking.toString();
      // for (let index = 0; index < evaluationRecord.productList.length; index++) {
      //   evaluationRecord.productList[index].customerList.forEach(element => {
      //   accumulated += 1;
      //  });

      // }
     // console.log(accumulated);


     return  0.15 *100 ;
    }

}
