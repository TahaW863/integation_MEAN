/**
 * @Id
    @param {string} id
    @param {int} sid
    @param {int} year;
    @param {Array.<Product>} productList
    @param {SocialPerformance} socialPerformance
 */
 class EvaluationRecord{
    constructor(sid,year,productList,socialPerformance){
        this.sid=sid;
        this.year=year;
        this.productList=productList;
        this.socialPerformance=socialPerformance;
    }
}
module.exports = EvaluationRecord;