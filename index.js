var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);


server.listen(3000);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('new message', function(data) {
        io.sockets.emit('message', data);

    })
})

// setInterval(function() {
//     io.sockets.emit('message', { 'message': "Sample Data" });
// }, 2000);