var express = require('express');
var router = express.Router();
let landing = require('../controllers/landing.js');
/* GET home page. */
router.get('/',landing.index);

module.exports = router;
