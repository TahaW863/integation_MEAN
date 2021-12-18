import { Component, OnInit } from '@angular/core';
import {SalesManService} from "../../services/salesMan.service";
import {SalesMan} from "../../models/SalesMan";

@Component({
  selector: 'app-sales-man-page',
  templateUrl: './sales-man-page.component.html',
  styleUrls: ['./sales-man-page.component.css']
})
export class SalesManPageComponent implements OnInit {
  salesMan: SalesMan [];
  displayedColumns: string[] = ['name', 'department',
                                'value',
                                'year',
  ];
  constructor(private salesManService: SalesManService) { }

  ngOnInit(): void {
    this.salesManService.getAllSalesMan().subscribe(
      (data: SalesMan[]) => {
        this.salesMan = data;
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
