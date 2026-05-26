var socketio = require('socket.io');
var io;
exports.listen = function (server) {
  const io = socketio(server);
  io.on('connection', function (socket) {
    handleCommand(socket);
  });
};
function handleCommand(socket) {
  socket.on('daAdd', function (data) {
    var val1 = Number(data.addend1);
    var val2 = Number(data.addend2)
    console.log('Adding ' + val1 + ' + ' + val2);
    var answer = doDaAddition(val1, val2);
    var message = val1 + ' + ' + val2 + ' = ' + answer;
    // Build and send reply
    socket.emit('daAnswer', message);
  });

};
function doDaAddition(x, y) {
  return x + y;
}

