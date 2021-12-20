import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EvaluationRecord} from "../models/EvaluationRecord";
import { SalesMan } from '../models/SalesMan';

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
   */
  getOneEvaluationRecord(_sid:number): Observable<EvaluationRecord> {
    return this.http.get<EvaluationRecord>(`/api/EvaluationRecord/${_sid}`);
  }
  
  getOneSalesMan(_sid:number): Observable<SalesMan> {
    return this.http.get<SalesMan>(`/api/salesman/${_sid}`);
  }

}
