var express = require('express');
var app = express();
var http = require('http').Server(app);
//var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.get('/', function (req, res) {
  res.render("index");
  console.log('access');
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

http.listen(port, function () {
  console.log('listening on *:3000');
});
