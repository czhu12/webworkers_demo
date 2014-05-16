var express = require('express');
var app = express();


app.listen(4000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.use(express.static(process.cwd() + '/public'));

