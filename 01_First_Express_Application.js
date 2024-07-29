var express = require("express")

app = express()

app.get("/", function(req, res){
    res.send("First Express App")
})

app.listen(8000, function () {
    console.log("Server Running in Port 8000")
})