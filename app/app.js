var express = require('express');
  var app = express();

  app.get('/', function(req, res){
    res.send("Hello World!")
  });

  app.get('/names.json', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({names : ["Adam","Rebecca", "Richard"]}));
    res.end();
  });

  var port = process.env.PORT || 3000;
  app.listen(port);

  module.exports = app;