/**
 * @param {int} leaderShipCompetence
 * @param {int} opennessToEmployee
 * @param {int} socialBehaviorToEmployee 
 * @param {int} attitudeTowardsClient
 * @param {int} communicationSkills
 * @param {int} integrityToCompany
 */
class SocialPerformance{
    constructor(leaderShipCompetence, opennessToEmployee, socialBehaviorToEmployee,
                attitudeTowardsClient, communicationSkills, integrityToCompany){
                    this.leaderShipCompetence=leaderShipCompetence;
                    this.opennessToEmployee=opennessToEmployee;
                    this.socialBehaviorToEmployee=socialBehaviorToEmployee;
                    this.attitudeTowardsClient=attitudeTowardsClient;
                    this.communicationSkills=communicationSkills;
                    this.integrityToCompany=integrityToCompany;
                }
}
module.exports = SocialPerformance;