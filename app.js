// Import net module.
var net = require('net');

var server = net.createServer();
server.listen('127.0.0.1', 5222);
console.log('Server listening on ' + server.address().address + ':' + server.address().port);
server.on('connection', function (sock) {
  console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
  // other stuff is the same from here
});