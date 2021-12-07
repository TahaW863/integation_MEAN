/**
 * @param {float} value
 * @param {int} year
 */

const mongoose =require("mongoose");
const Schema = mongoose.Schema;

// Create Our Schema
const BonusSalarySchema = new Schema({
    value:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
});
const BonusSalary=mongoose.model('bonusSalary',BonusSalarySchema);
module.exports = {Schema:BonusSalarySchema,Model:BonusSalary};