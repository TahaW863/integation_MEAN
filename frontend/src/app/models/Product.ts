import { Customer } from "./Customer"


export class Product{
  constructor(public _id:string,
              public name:string,
              public customerList:Array<Customer>,
              ) {
  }

}
