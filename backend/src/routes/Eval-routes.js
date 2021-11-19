const express = require('express');
const EvlRouter= express.Router();
const EvlApi = require('../apis/Eval-api');
EvlRouter.get('/', EvlApi.fetchAllEvls);
EvlRouter.post('/', EvlApi.createEvl)
EvlRouter.delete('/:sid',EvlApi.deleteEvl)
EvlRouter.put('/',EvlApi.updateEvl)
module.exports= EvlRouter;