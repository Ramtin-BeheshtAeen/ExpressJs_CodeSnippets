var express = require('express')

app = express()

app.get('/', function(req, res){
    
    res.json(carsJsonArray)
})

app.listen(8000, function(){
    console.log('Server is running at port 8000')
})