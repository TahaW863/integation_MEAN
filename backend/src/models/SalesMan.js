/**
 * @param {int} sid
 * @param {string} name
 * @param {string} department 
 */
/*class SalesMan{
    constructor(sid, name, department){
        this.sid=sid ;
        this.name=name ;
        this.department=department ;
    }
}*/
const mongoose =require("mongoose");
const Schema = mongoose.Schema;

// Create Our Schema
const SalesManSchema = new Schema({
    sid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    }
});
const SalesMan=mongoose.model('salesMan', SalesManSchema);
module.exports = SalesMan;