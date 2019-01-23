var express = require('express');
var router = express.Router();
var Users = require('../models/user');
router.get('/', function (req, res) {
    res.render('index');

});
router.post("/save", function (req, res) {
    let name = req.body.name;
    let email = req.body.name;
    let password = req.body.password;
    let address = req.body.address;
    let city = req.body.city;
    let state = req.body.state;
    let zip = req.body.zip;
    if (!name) {
        return res.send("name is empty");
    }
    if (!email) {
        return res.send("email is empty")
    }
    if (!password) {
        return res.send("password is empty");
    }
    if (!address) {
        return res.send("address is empty")
    }
    if (!city) {
        return res.send("city is empty");
    }
    if (!state) {
        return res.send("state is empty")
    }
    if (!zip) {
        return res.send("zip is empty")
    }
    let user = new Users({
        name: name,
        email: email,
        password: password,
        address: address,
        city: city,
        state: state,
        zip: zip,
        

    });


})
module.exports = router;