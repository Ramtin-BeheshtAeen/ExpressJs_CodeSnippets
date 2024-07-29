var express = require("express")

app = express()

app.get("/one", function(req, res){
    res.send("That is an Simple String Response")
})

app.get("/two", function(req, res){
    res.end("That is an Simple String Response With Other Method")
})

app.listen(8000, function() {
    console.log("App is running at port 8000")
})