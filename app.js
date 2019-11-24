const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({extended : false}))

//server static files
app.use(express.static(path.join(__dirname,'/client')))

//le's server the index page
app.get('/',function(req,res){
	res.sendFile(__dirname+"/client/index.html")
})
app.use('/client',express.static(__dirname+'/client'))
//setting up the server

app.listen(3000,()=> {

	console.log('server is runing on ')
})
module.exports = app