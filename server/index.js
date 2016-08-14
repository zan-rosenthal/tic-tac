//Require app and set up http server
var app = require('./server');
var http = require('http').Server(app);

//Environment variables
var port = process.env.PORT || 3000;

//Wrap server in socket server
var io = require('socket.io').listen(http);
var socket = require('./sockets');

//TODO: Setup sockets and socket client on frontend:
//io.on('connection', socket);

http.listen(port, ()=>{
  console.log('Server listening on port: ' + port);
});
