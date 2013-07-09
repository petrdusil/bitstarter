var express = require('express');

var app = express.createServer(express.logger());
var fs = require ('fs');
var buff;

app.get('/', function(request, response) {
  buff = fs.readFileSync('index.html', 'utf8');
  response.send (buff);
};

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
