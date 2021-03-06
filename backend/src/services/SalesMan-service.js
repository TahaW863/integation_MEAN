
const SalesMan = require("../models/SalesMan");

const bonusSalaryService = require("./BonusSalary-service");


module.exports = {
    /**
     * retrieves All SalesMan
     * @return {Promise<User>}
     */
    getAll: async (req) => {
        //const _salesMan =await req.app.get('db').collection('salesMan');//get database from 
        return await SalesMan.find({});
    },
    findOne: async (req) => {
        //const _salesMan =await req.app.get('db').collection('salesMan');//get database from 
        return await SalesMan.findOne({'sid':parseInt(req.params.sid)});
    },
    /**
     * Creating one sales Man
     * @param req express request
     * @return {Promise<SalesMan>}
    */
    addOne: async (req) => {
        //const _salesMan =await req.app.get('db').collection('salesMan');//get database from express
        //console.log(body)
        /*const salesMan=new SalesMan(req.body.sid,req.body.name, req.body.department
        );*/
        const salesMan = {
            sid: req.body.sid,
            employeeId: req.body.employeeId,
            name: req.body.name,
            department: req.body.department,
            bonusSalary: req.body.bonusSalary || null
        }
        return (await SalesMan.insertMany(salesMan)).insertedId;
    },
    /**
     * Delete one Sales Man
     * @return {Promise<}
     */
    deleteOne: async (req) => {
        //const _salesMan =await req.app.get('db').collection('salesMan');//get database from
        return (await SalesMan.deleteOne({ "sid": parseInt(req.params.sid) }))
    },
    updateOne: async (req) => {
        //const _salesMan =await req.app.get('db').collection('salesMan');//get database from
        /*const salesMan=new SalesMan(req.body.sid,req.body.name, req.body.department
            );*/
            
        const salesMan = {
            sid: req.body.sid,
            employeeId: req.body.employeeId,
            name: req.body.name,
            department: req.body.department,
            bonusSalary: req.body.bonusSalary || null
        }
        console.log(req.body.bonusSalary);
        await bonusSalaryService.addBonusSalaryOHRM(req.body.employeeId,req.body.bonusSalary);
        return (await SalesMan.updateOne({ 'sid': parseInt(req.body.sid) }, { $set: salesMan }))
    },
    updateBonusSalary: async (req) => {
        //const _salesMan =await req.app.get('db').collection('salesMan');//get database from
        /*const salesMan=new SalesMan(req.body.sid,req.body.name, req.body.department
            );*/
            
        const salesMan = {
            sid: req.sid,
            employeeId: req.employeeId,
            name: req.name,
            department: req.department,
            bonusSalary: req.bonusSalary || null
        }
        console.log(req.bonusSalary);
        await bonusSalaryService.addBonusSalaryOHRM(req.employeeId,req.bonusSalary);
        return (await SalesMan.updateOne({ 'sid': parseInt(req.sid) }, { $set: salesMan }))
    },
 
}
