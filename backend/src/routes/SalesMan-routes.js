const express = require('express');
const salesManRouter= express.Router();
const salesManApi = require('../apis/SalesMan-api');

salesManRouter.get('/', salesManApi.fetchAllSalesMan);
salesManRouter.get('/:sid',salesManApi.getOneSalesMan);
salesManRouter.post('/', salesManApi.createSalesMan);
salesManRouter.delete('/:sid',salesManApi.deleteSalesMan);
salesManRouter.put('/',salesManApi.updateSalesMan);

module.exports= salesManRouter;