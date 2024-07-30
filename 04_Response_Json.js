var express = require('express')

app = express()

app.get('/', function(req, res){
    
    let carsJsonArray = [
        {
            "make": "Toyota",
            "model": "Corolla",
            "year": 2020,
            "color": "Blue"
        },
        {
            "make": "Honda",
            "model": "Civic",
            "year": 2019,
            "color": "Red"
        },
        {
            "make": "Ford",
            "model": "Mustang",
            "year": 2021,
            "color": "Black"
        }
    ]
    

    res.json(carsJsonArray)
})

app.listen(8000, function(){
    console.log('Server is running at port 8000')
})