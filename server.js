var express = require('express');

var app = express();

var port = 8117;

// MIDDLEWARE ===================================

app.use(express.static(__dirname + '/public'));

// CONNECTION(S) ================================

app.listen(port, function() {
	console.log('Listening to port ' + port)
})