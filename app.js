var express = require('express');
var app = express()
var serv = require('http').Server(app);
app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');
});
app.use('/index',express.static(__dirname+'/index'));

console.log('server stared')

var io = require('socket.io')(serv,{});
io.sockets.on('connection',function(socket) {
	console.log('socket connection')
});




