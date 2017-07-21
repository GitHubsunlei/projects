var express = require('express');
var router = express.Router();
var userctrl=require("../controller/userctrl.js");
var userCheck=require("../config/userCheck.js");
/* GET users listing. */
router.get('/reg',userctrl.reg);
router.post('/doreg', userctrl.doreg);
router.get('/active',userCheck,userctrl.active);
router.get('/activeok/:id',userCheck,userctrl.activeok);
router.get('/login',userctrl.login);
router.post('/dologin',userctrl.dologin);
router.get('/reset',userCheck,userctrl.reset);
router.post('/doreset',userCheck,userctrl.doreset);
router.get('/logout',userctrl.logout);
module.exports = router;
