var path = require('path');
var express = require('express');
var fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();


app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.json());
 
var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.post('/add-news', (req, res) => {
  console.log(JSON.parse(req.body));
  const data = fs.readFileSync('./news.json', 'utf-8');
   let newData;
   if (data === '') {
     newData = req.body;
   } else {
     newData = data + ', \n' + req.body;
   }
   fs.writeFile('./news.json', newData, function(err) {
     if (err) {
       return console.log(err);
     } else {
     res.send(true);
     console.log('Данные сохранены');
     }
   });
});
app.post('/read', (req, res) => {
  fs.readFile('./news.json', 'utf-8', (err, jsonString) => {
    if (err) {
      console.log(err);
    } else {
      // res.json(jsonString);
      res.send('['+jsonString+']');
      console.log('Ответ отправлен');
    }
  });
});

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function () {
  console.log('listening');
});