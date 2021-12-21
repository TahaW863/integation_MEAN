const salesManService = require('../services/SalesMan-service');

module.exports = {
/**
 * endpoint, which handles Fetching All salesMan from the data base 
 * @param req express request
 * @param res express response
 * @return {Promise<void>}
 */
    fetchAllSalesMan:function (req, res){
        salesManService.getAll(req).then(result=>{
            res.status(200).send(result);
        })
       
     },
    createSalesMan: function(req, res){
        //console.log(req.body)
        salesManService.addOne(req).then(resutl=>{
            res.status(201).send("Created");
        })
    },
    deleteSalesMan: function(req, res){

        salesManService.deleteOne(req).then(result=>{
            res.status(200).send('Deleted');
        })
    },
    updateSalesMan: function(req, res){
        salesManService.updateOne(req).then(result=>{
            res.status(200).send("Updated")
        })
    },
    getOneSalesMan: function(req, res){
        salesManService.findOne(req).then(result=>{
            res.status(200).send(result)
        })
    },

}