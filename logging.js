var express = require('express')
var app = express()

// Simple request time logger
app.use((req, res, next) => {
    console.log("[Server Activity:] " + Date(Date.now()));

    next();

});

app.listen(3000, () => console.log ('Example app listening on port 3000!'));