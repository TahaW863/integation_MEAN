import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SalesMan} from "../models/SalesMan";

/**
 * handles backend communication regarding user accounts
 */
@Injectable({
  providedIn: 'root'
})
export class SalesManService {

  constructor(private http: HttpClient) { }

  /**
   * gets all SalesMan
   * @returns {Observable<SalesMan[]>}
   */
  getAllSalesMan(): Observable<SalesMan[]> {
    return this.http.get<SalesMan[]>('/api/salesman');
  }
}
