var path = require('path');
var express = require('express');
var fs = require('fs');
const bodyParser = require('body-parser');
// const cors = require('cors');
var app = express();
// app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.json());

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.post('/add-news', (req, res) => {
  console.log(JSON.parse(req.body));
  // тестирую получение данных без []
  fs.readFile('./test.json','utf-8', (err, jsonString) => {
    if (err) {
      console.log(err);
    } else {
      console.log(jsonString);
    }
  });
});
app.post('/read', (req, res) => {

});

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function () {
  console.log('listening');
});