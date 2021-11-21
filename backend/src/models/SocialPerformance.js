/**
 * @param {int} leaderShipCompetence
 * @param {int} opennessToEmployee
 * @param {int} socialBehaviorToEmployee 
 * @param {int} attitudeTowardsClient
 * @param {int} communicationSkills
 * @param {int} integrityToCompany
 */
/*class SocialPerformance{
    constructor(leaderShipCompetence, opennessToEmployee, socialBehaviorToEmployee,
                attitudeTowardsClient, communicationSkills, integrityToCompany){
                    this.leaderShipCompetence=leaderShipCompetence;
                    this.opennessToEmployee=opennessToEmployee;
                    this.socialBehaviorToEmployee=socialBehaviorToEmployee;
                    this.attitudeTowardsClient=attitudeTowardsClient;
                    this.communicationSkills=communicationSkills;
                    this.integrityToCompany=integrityToCompany;
                }
}*/
const mongoose =require("mongoose");
const Schema = mongoose.Schema;

// Create Our Schema
const SocialPerformanceSchema = new Schema({
    leaderShipCompetence:{
        type:Number,
        required:true
    },
    opennessToEmployee:{
        type:Number,
        required:true
    },
    socialBehaviorToEmployee:{
        type:Number,
        required:true
    },
    attitudeTowardsClient:{
        type:Number,
        required:true
    },
    communicationSkills:{
        type:Number,
        required:true
    },
    integrityToCompany:{
        type:Number,
        required:true
    }
});
const SocialPerformance=mongoose.model('socialPerformance', SocialPerformanceSchema);
module.exports = {Schema:SocialPerformanceSchema,Model:SocialPerformance}