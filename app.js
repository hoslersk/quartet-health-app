var express = require('express');
// var fs = require('fs')
// var morgan = require('morgan')
var app = express();
var port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
})

app.get ('/', function(req, res) {
  res.render('index');
});

app.listen(port);
console.log('Server started on ' + port);
