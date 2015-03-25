var app = angular.module('noServer');

app.controller('servicesCtrl', function($scope, $http) {
	$scope.pictures = [];

	$scope.getPictures = (function() { //creating a truthy
		$http({
			method: 'GET',
			url: '/instagramFeed'
		}).then(function(res) {
			console.log(res.data.data);
			var data = res.data.data;
			for (var i = 0; i < data.length; i++) {
				var instaObj = {};
				instaObj.lowRes = data[i].images.low_resolution.url //
				instaObj.comments = data[i].comments.count // comments count
				instaObj.likes = data[i].likes.count // likes count
				instaObj.urlLink = data[i].link // link to instagram post
				instaObj.timestamp = data[i].created_time // time stamp
				console.log(instaObj)
				$scope.pictures.push(instaObj);

			}

		})
	})()

	// $scope.getProfile = (function() {
	// 	$http ({
	// 		method: 'GET',
	// 		url: '/jamieInstagram'
	// 	}).then(function(res) {
	// 		console.log(res.data)
	// 		// for (var i = 0; i < data.data.length; i++) {
	// 		// 	var profileObj = {};
	// 		// }
	// 	})
	// })()
})