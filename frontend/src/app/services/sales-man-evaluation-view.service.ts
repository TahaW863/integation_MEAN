import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EvaluationRecord} from "../models/EvaluationRecord";

/**
 * handles backend communication regarding user accounts
 */
@Injectable({
  providedIn: 'root'
})
export class SalesManEvaluationViewService {
  constructor(private http: HttpClient) { }


  /**
   * @returns {Observable<EvaluationRecord>}
//    */
// calculateBonusSalary (_sid:number): Observable<Number>{
//    return
// }

  getOneEvaluationRecord(_sid:number): Observable<EvaluationRecord> {
    return this.http.get<EvaluationRecord>(`/api/EvaluationRecord/${_sid}`);
  }


}
