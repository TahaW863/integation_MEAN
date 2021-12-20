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
<<<<<<< HEAD
    }
    ,
    getOneSalesMan: function(req, res){
        salesManService.findOne(req).then(result=>{
            res.status(200).send(result)
        })
    }
=======
    },
    addBonusSalary: function (req,res)  {

        salesManService.addBonusSalary(req).then(result=>{
            res.status.send(result);
        })
    },
    


    
>>>>>>> 56a38884f1241698d15aaf77448a8d8f2575e085
}