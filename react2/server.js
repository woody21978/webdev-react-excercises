var express = require('express');
var app = express();

app.set('port', (process.env.POSRT || 3000));

app.use('/', express.static(__dirname));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});