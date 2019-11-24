const express = require('express')
const path = require('path')

const app = express()

app.use(express.urlencoded({extended : false}))

//server static files
app.use(express.static(path.join(__dirname,'public')))

//template engine 
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')
//le's server the index page
app.get('/',function(req,res){
	res.render('index')



})


//setting up the server

app.listen(3000,()=> {

	console.log('server is runing on ')
})
module.exports = app