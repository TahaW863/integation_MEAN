/**
 * @param {string} name 
 * @param {Array.<Customer>} customerList
 */
class Product {
    constructor(name, customerList){
        this.name = name;
        this.customerList=customerList;
    }
}
module.exports = Product;