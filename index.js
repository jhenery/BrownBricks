var express = require('express');


var app = express();
var server = app.listen(3000, function(){
    console.log('Listening to requests on port 3000');
});

app.use(express.static('public'));


