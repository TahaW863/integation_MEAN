class BounsSalary {
    constructor(public value:number, public year:number) {
    }
}

export class SalesMan{
  constructor(public _id:string,
              public name:string,
              public sid:number,
              public department:string,
              public bonusSalary:BounsSalary
              ) {
  }

}
