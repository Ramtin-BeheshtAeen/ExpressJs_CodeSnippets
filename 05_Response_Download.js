var express = require('express')

app = express()

app.get('/file', function(req, res){
    res.download("./uploads/1075-536x354.jpg")
})

app.listen(8000, function(){
    console.log('Server is running at port 8000')
})