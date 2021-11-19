/**
 * This is the Customer Data Class
 * @param {string} clientName
 * @param {int} itemsSold
 * @param {string} ranking
 */
class Customer {
    constructor (clientName, itemsSold, ranking){
        this.clientName=clientName;
        this.itemsSold=itemsSold;
        this.ranking=ranking;
    }
}
module.exports = customer;