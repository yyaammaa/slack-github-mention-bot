'use strict';

var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.render('pages/index');
  console.log('hi');
  response.json({
      "hello": "world"
    }
  )
});

// curl -v -H "Content-Type: application/json" -d '{  "title": "contact form test mail (curl) ",  "from": "yama@supership.jp",  "name": "yama",  "text": "test mail from contact form http://supership.jp "}' http://localhost:5000
//app.post('/', function(req, res) {
//  //res.send('POST request to homepage');
//
//  console.log('posted, root');
//  console.log(req.body);
//
//  var data = req.body;
////  var data = JSON.parse(req.body);
//  console.log('name = ' + data.name);
//
//  // echo back
//  //res.json(req.body);
//});

// echo bot
// https://warm-savannah-72532.herokuapp.com/labs
//app.post('/labs', function(req, res) {
//
//  console.log('posted');
//  console.log(req.body);
//
//  var data = req.body;
//  var name = data.user_name;
//  var text = data.text;
//
//  var message = text.substr("heroku ".length);
//  console.log(message);
//
//  res.json({
////    "text": "from " + name,
//      "text": message,
//      "username": "echobot"
//    }
//  )
//});

//app.get('/cool', function(request, response) {
//  response.send(cool());
//});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});