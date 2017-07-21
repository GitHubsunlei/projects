var express = require('express');
var router = express.Router();
var indexCtrl=require("../controller/indexCtrl.js");
/* GET home page. */
router.get('/',indexCtrl.index);

module.exports = router;
