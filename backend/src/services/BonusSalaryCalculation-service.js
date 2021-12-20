const SalesMan = require("../models/SalesMan");
const EvaluationRecord = require("../models/EvaluationRecord");
const bonusSalaryService = require("./BonusSalary-service");
const SalesManService = require("./SalesMan-service");
module.exports = {
    async calculateTheBonusSalary() {
        let salesManList = [];
        let evaluationRecordList = []

        salesManList = await SalesMan.find({});
        evaluationRecordList = await EvaluationRecord.find({});
        
        salesManList.forEach(salesMan => {
            evaluationRecordList.forEach(evl => {

                let result = SalesMan.findOne({ 'sid': parseInt(evl.sid) });
                
                if (result) {
                    var bonusValue = 0;
                    evl.productList.forEach(product => {
                        product.customerList.forEach(customer => {
                            if (customer.ranking == "1") {
                                console.log(customer.ranking);
                                bonusValue = bonusValue + customer.itemsSold * 30;
                                console.log(bonusValue);
                            }
                            else if (customer.ranking == "2") {
                                console.log(customer.ranking);
                                bonusValue += customer.itemsSold * 20;
                                console.log(bonusValue);
                            }
                            else if (customer.ranking == "3") {
                                console.log(customer.ranking);
                                bonusValue += parseInt(customer.itemsSold) * 10;
                                console.log(bonusValue);
                            }
                        });

                    });

                    console.log("evaluationRecord ", evl);
                    salesMan.bonusSalary.value = bonusValue;
                    console.log("bonusSalary value" + salesMan.bonusSalary.value)
                    salesMan.bonusSalary.year = 2022;
                    console.log("bonusSalary year" + salesMan.bonusSalary.year)

                    const salesManupdate = {
                        sid: salesMan.sid,
                        employeeId: salesMan.employeeId,
                        name: salesMan.name,
                        department: salesMan.department,
                        bonusSalary: salesMan.bonusSalary || null
                    }
                    console.log(salesManupdate);
                   //bonusSalaryService.addBonusSalaryOHRM(salesMan.employeeId,salesMan.bonusSalary);
                   SalesManService.updateBonusSalary(salesManupdate);
                     //SalesMan.updateOne({'sid': parseInt(salesMan.sid) }, { $set: salesManupdate });
                }
                else {
                    console.log("no evaluation reocrd");
                }
            });
        });
    },
}