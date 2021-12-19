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
export class EvaluationRecordService {
  constructor(private http: HttpClient) { }

  /**d
   * @returns {Observable<EvaluationRecord[]>}
   */

  getAllEvaluationRecord(): Observable<EvaluationRecord[]> {
    return this.http.get<EvaluationRecord[]>('/api/EvaluationRecord');
  }
}
