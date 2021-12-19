import { Product } from "./Product"
import { SocialPerformance } from "./SocialPerformance"


export class EvaluationRecord{
  constructor(public _id:string,
              public sid:string,
              public productList:Array<Product>,
              public SocialPerformance:SocialPerformance,
              ) {
  }

}
