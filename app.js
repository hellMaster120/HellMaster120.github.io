var express = require('express')
var path = require('path')
var app = express()
var serv = require('http').Server(app)
app.use(express.urlencoded({extended : false}))

//server static files
app.use(express.static(path.join(__dirname,'/client')))

//le's server the index page
app.get('/',function(req,res){
	res.sendFile(__dirname+"/client/index.html")
})
app.use('/client',express.static(__dirname+'/client'))
//setting up the server
serv.listen(2000)
module.exports = app