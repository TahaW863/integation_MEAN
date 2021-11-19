
const SalesMan = require("../models/SalesMan")
module.exports={
/**
 * retrieves All SalesMan
 * @return {Promise<User>}
 */
    getAll:async (req)=>{
        const _salesMan =await req.app.get('db').collection('salesMan');//get database from 
        return await _salesMan.find({}).toArray();
    },
    findOne:async (req)=>{
        const _salesMan =await req.app.get('db').collection('salesMan');//get database from 
        return await _salesMan.findOne({'sid':parseInt(req.body.sid)});
    },
/**
 * Creating one sales Man
 * @param req express request
 * @return {Promise<SalesMan>}
*/
    addOne:async (req)=>{
        const _salesMan =await req.app.get('db').collection('salesMan');//get database from express
        //console.log(body)
        const salesMan=new SalesMan(req.body.sid,req.body.name, req.body.department
        );
        return (await _salesMan.insertOne(salesMan)).insertedId;
    },
/**
 * Delete one Sales Man
 * @return {Promise<}
 */
 deleteOne: async (req)=>{
    const _salesMan =await req.app.get('db').collection('salesMan');//get database from
    return (await _salesMan.deleteMany({"sid": (req.params.sid)}))
 },
 updateOne: async (req)=>{
    const _salesMan =await req.app.get('db').collection('salesMan');//get database from
    const salesMan=new SalesMan(req.body.sid,req.body.name, req.body.department
        );
    return (await _salesMan.updateOne({'sid': parseInt(req.body.sid)}, {$set:salesMan}))
 }
}
