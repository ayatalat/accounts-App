var bodyParser = require('body-parser');
var account = require('../models/account');


var accountController = {
    list: function (req, res) {
    account.findAll().then(accounts => {     
          res.json(accounts)
        })
    },
    new: function (req, res) {
        console.log(req.body);
        account.create({
            account_number: req.body.account_number
            , total_service: req.body.total_service
            , total_bill: req.body.total_bill

        }).then(newaccount => {
            res.json({ status: "success", newaccount: newaccount })

        }).catch((error) => {
            res.send(error);
        })

    }
}




module.exports = accountController;