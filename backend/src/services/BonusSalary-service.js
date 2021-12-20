const SalesManService = require("./SalesMan-service");
const axios = require('axios');
const qs = require('node:querystring');
const baseUrl = 'https://sepp-hrm.inf.h-brs.de/symfony/web/index.php';
const bonusSalary = require('../models/BonusSalary');
const SalesMan = require("../models/SalesMan");
const FormData = require('form-data');
const EvaluationRecord = require("../models/EvaluationRecord");

const body = qs.stringify({
    client_id: 'api_oauth_id',
    client_secret: 'oauth_secret',
    grant_type: 'password',
    username: 'Dulkumoni',
    password: '*Safb02da42Demo$'
});

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }
};

async function getBearerToken() {

    let res = await axios.post(`${baseUrl}/oauth/issueToken`, body, config);
    if (res.data.error) {
        throw Error(res.data.error);
    }
    let token = res.data.access_token;
    //console.log(token) ;
    return token;
}

module.exports = {
    async addBonusSalaryOHRM(employeeId, bonusSalary) {
        let token = await getBearerToken();
        var formData = new FormData();
        formData.append('value', bonusSalary['value']);
        formData.append('year', bonusSalary['year']);

        try {
            console.log(' bonus salary added ' + employeeId + "" + token);
            let request = await axios.post(
                baseUrl + '/api/v1/employee/' + employeeId + '/bonussalary',
                formData,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data; boundary=' + formData.getBoundary()
                    }
                }
            );
            console.log(request);

        } catch (error) {
            throw new Error(' adding bonus salary failed: ' + error);
        }
    },

    async calculateTheBonusSalary() {
        let salesManList = [];
        let evaluationRecordList = []

        salesManList = await SalesMan.find({});
        evaluationRecordList = await EvaluationRecord.find({});
        
        salesManList.forEach(salesMan => {
            evaluationRecordList.forEach(evl => {
                let result = SalesMan.findOne({ 'sid': parseInt(evl.sid) })
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
                    //addBonusSalaryOHRM(salesMan.employeeId,salesMan.bonusSalary);
                    SalesMan.updateOne({'sid': parseInt(salesMan.sid) }, { $set: salesManupdate });
                }
                else {
                    console.log("no evaluation reocrd");
                }
            });
        });
    },
}

