'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

let bot = require('./bot');
let app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  console.log('/ get');

  //let message = config('SLACK_TOKEN');
  //response.json({
  //    "hello": "world",
  //    "message": message
  //  }
  //)

  response.send('\n 👋 🌍 \n');
});

app.listen(app.get('port'), (err) => {
  if (err) throw err;

  console.log('Node app is running on port', app.get('port'));

  const token = config('SLACK_TOKEN');
  if (token) {
    console.log('slack token = ' + token);
    //  bot.listen({ token: config('SLACK_TOKEN') })
  } else {
    console.log('Oops! no slack token available.');
  }
});