var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(burger_data) {
        console.log("\nThe data:");
        console.log(burger_data);
        res.render('index', { burger_data });
    });
});

router.put('/burgers/update', function(req, res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect('/');
    });
});

router.get('/zebra', function(req, res) {
    console.log('zebra...');
    res.redirect('/');
});

//     console.log("something happened");
// });



module.exports = router;
