var express = require('express')

app = express()

app.get("/redirectMe", function( req, res){
    res.redirect('/redirectedRoute')
})

app.get("/redirectedRoute", function( req, res ){
    res.send('This is the redirected Page')
})

app.listen(8000, function(){
    console.log("app running in port 8000")
})