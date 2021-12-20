import { BonusSalary } from "./BonusSalary";

export class SalesMan{
  constructor(public _id:string,
              public name:string,
              public sid:number,
              public department:string,
              public bonusSalary:BonusSalary
              ) {
  }

}
