var express = require("express")

app = express()

app.get('/unauthorized', function(req, res){
    res.status(401).end("You Dont Have Permission")
})


app.listen(8000, function(){
    console.log("App is running at port 8000")
})
