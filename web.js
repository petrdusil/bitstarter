var express = require('express');

var app = express.createServer(express.logger());
var fs = require ('fs');
var buff = new Buffer(256);

app.get('/', function(request, response) {
  fs.readFileSync('index.html', function (err, data) {
      if(err) throw err;
      buff.write(data);
      response.send(buff.toString('utf-8'));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
