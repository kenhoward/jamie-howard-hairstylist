var express = require('express');
var request = require('request');

var app = express();

var port = 8117;

// MIDDLEWARE ===================================

app.use(express.static(__dirname + '/public'));

app.get('/instagramFeed', function(req, res) {
	request.get('https://api.instagram.com/v1/users/1075315762/media/recent/?client_id=e1ce9a8f9ae2445b933dceed9bd3850e&min_id=873291822536584574_1075315762', function(err, response, body) {
		console.log("response", response);
		res.send(body);
	})
})

// CONNECTION(S) ================================

app.listen(port, function() {
	console.log('Listening to port ' + port)
})