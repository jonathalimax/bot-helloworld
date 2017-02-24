var express = require('express');
var packageInfo = require('./package.json');

var app = express();

app.get('/', function(req, res) {
  res.json({ version: packageInfo.version });
});

var PORT = process.env.PORT || 3000;

if (PORT != 3000) {
  var server = app.listen(PORT, function() {
    var host = server.address().adress;
    var port = server.address().port;
  });

  console.log('Web server started at http://%s:%s', host, port);
} else {
  console.log('Web server started at http://%s', PORT);
}
