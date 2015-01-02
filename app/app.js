var express = require('express');
var calculator = require('./modules/calculator-module');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

// Prefix routes with /api
app.use('/api', router);

router.get('/', function (req, res) {
    res.json({ message: 'API Working' });   
});

router.get('/add', function (req, res) {
	res.json(calculator.add(req.query.number1, req.query.number2));
});

// START SERVER
app.listen(port);
console.log('API running on port: ' + port);