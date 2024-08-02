var express = require('express')

app = express()
//Usage: Useful when you want to ensure a header has a specific value.
//Sets the value of a header. If the header already exists, it will overwrite the existing valu
app.get('/exampleSet', (req, res) => {
    res.set({
        'Content-Type': 'text/plain',
        'Content-Length': '123',
        'ETag': '12345'
    });
    res.send('Hello, World!');
});


//Purpose: Appends a value to the specified header. If the header does not exist, it creates the header with the specified value.
//Usage: Useful when you want to add multiple values to a header,
//such as adding multiple cookies or setting multiple Cache-Control directives.
app.get('/exampleAppend', (req, res) => {

    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Set-Cookie', 'baz=qux; Path=/; Secure');

    res.send('Hello, World!');
});


app.listen(8000, function(){
    console.log("app running in port 8000")
})