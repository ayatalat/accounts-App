var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  require('../controllers/accountController').list(req, res);
});

router.post('/',function(req,res,next){
    require('../controllers/accountController').new(req, res);

})

router.get('/:id',function(req,res,next){
	require('../controllers/accountController').accountDetails(req,res);
})
module.exports = router;
