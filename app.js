var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');
});
app.use('/index',express.static(__dirname+'/index'));


serv.listen(port)

console.log('server stared')

var io = require('socket.io')(serv,{});
io.sockets.on('connection',function(socket) {
	console.log('socket connection')
});


