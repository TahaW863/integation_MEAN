
const Evl = require("../models/EvaluationRecord")
module.exports={
/**
 * retrieves All SalesMan
 * @return {Promise<User>}
 */
    getAll:async (req)=>{
        const _Evl =await req.app.get('db').collection('EvaluationRecord');//get database from 
        return await _Evl.find({}).toArray();
    },
    findOne:async (req)=>{
        const _Evl =await req.app.get('db').collection('EvaluationRecord');//get database from 
        return await _Evl.find({'sid':parseInt(req.body.sid)});
    },
/**
 * Creating one sales Man
 * @param req express request
 * @return {Promise<SalesMan>}
*/
    addOne:async (req)=>{
        const _Evl =await req.app.get('db').collection('EvaluationRecord');//get database from express
        //console.log(body)
        const Ev=new Evl(req.body.sid,req.body.year, req.body.productList,req.body.socialPerformance);
        return (await _Evl.insertOne(Ev)).insertedId;
    },
/**
 * Delete one Sales Man
 * @return {Promise<}
 */
 deleteOne: async (req)=>{
    const _Evl =await req.app.get('db').collection('EvaluationRecord');//get database from
    return (await _Evl.deleteOne({"sid": parseInt(req.params.sid)}))
 },
 updateOne: async (req)=>{
    const _Evl =await req.app.get('db').collection('EvaluationRecord');//get database from
    const Ev=new Evl(req.body.sid,req.body.year, req.body.productList,req.body.socialPerformance);
    return (await _Evl.updateOne({'sid': parseInt(req.body.sid)}, {$set:Ev}))
 }
}
