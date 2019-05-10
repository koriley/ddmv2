let express = require('express');
let exApp = express();


//paths
let campaignDir = '../campaign';
let campJson = "./campaign.json"

/** backend includes */
const Camp = require('../models/campaign.js');

Camp.camps(campJson).then((data)=>{
  campRes = data
})




exApp.get('/', (req, res)=>{
    posts = [
     campRes
    ]
    res.json(posts);
  });
  
  exApp.listen(3000);

  module.exports = exApp;