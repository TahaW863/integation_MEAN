const axios = require('axios') ; 
const qs = require('node:querystring');
const baseUrl = 'https://sepp-hrm.inf.h-brs.de/symfony/web/index.php';
const salesMan = require('../models/SalesMan');
const bonusSalary= require('../models/BonusSalary');
const SalesMan = require('../models/SalesMan');
const { addBonusSalary } = require('../services/SalesMan-service');
const body = qs.stringify({
    client_id: 'api_oauth_id',
    client_secret: 'oauth_secret',
    grant_type: 'password',
    username: 'Dulkumoni',
    password: '*Safb02da42Demo$'
    });

const config = {
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Accept':'application/json',}  
    };

 async function getBearerToken()  {
    let res = await axios.post(`${baseUrl}/oauth/issueToken` ,body,config);
     if (res.data.error){
       throw Error(res.data.error);
    }
    let token =  res.data.access_token ;
    //console.log(token) ;
    return token;
   }

module.exports= {
   
 loadSalesMen : async function loadSalesMen() {
    let token = await getBearerToken();
    let res = await axios.get(`${baseUrl}/api/v1/employee/search` , {headers:{"Authorization" : `Bearer ${token}`}})
    //console.log(res.data.data[0]);
    let salesMenJSONList = res.data.data;
    let salesMenObjectList = [];
     
   // console.log('im here');
    let bonusSalaryObject = {
        value : 0 ,
        year : 2021
    } ;

    salesMenJSONList.forEach(element => {
        let bonusSalaryObject = {
        value : 0,
        year : 2021
    } ;
        if (element.jobTitle =="Senior Salesman") {
         const salesMan={
            sid:element.code ,
            employeeId: element.employeeId,
            name:element.firstName,
            department:element.jobTitle || ' ',
            bonusSalary:bonusSalaryObject || null
        }
        //console.log(salesMan);
        
        salesMenObjectList.push(salesMan);
    }
    });
    
   return salesMenObjectList;

}  


}