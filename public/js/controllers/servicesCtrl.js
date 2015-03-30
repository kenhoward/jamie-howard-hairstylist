var app = angular.module('noServer');

app.controller('servicesCtrl', function($scope, $http) {
	$scope.pictures = [];

	$scope.titles = [];

	$scope.getPictures = (function() { //creating a truthy
		$http({
			method: 'GET',
			url: '/instagramFeed'
		}).then(function(res) {
			// console.log(res.data.data);
			var data = res.data.data;
			for (var i = 0; i < data.length; i++) {
				var instaObj = {};
				instaObj.lowRes = data[i].images.low_resolution.url
				instaObj.comments = data[i].comments.count // <i class="fa fa-comment"></i>
				instaObj.likes = data[i].likes.count // FA: Hallow Heart <i class="fa fa-heart-o"></i> // Solid: <i class="fa fa-heart"></i>
				instaObj.urlLink = data[i].link // link to instagram post
				instaObj.timestamp = data[i].created_time // <i class="fa fa-clock-o"></i>
				console.log(instaObj)
				$scope.pictures.push(instaObj);

			}

		})
	})()

	$scope.getProfile = (function() {
		$http ({
			method: 'GET',
			url: '/jamieInstagram'
		}).then(function(res) {
			// console.log(res.data);
			var data = res.data.data
			var profileObj = {};
			profileObj.username = data.username
			profileObj.profilePic = data.profile_picture
			profileObj.followers = data.counts.followed_by
			profileObj.follows = data.counts.follows
			profileObj.posts = data.counts.media
			$scope.titles.push(profileObj);
			})
	})()

	$scope.serviceInterval = 3000;



})

// before: this returned the object data I needed

	// $scope.getProfile = (function() {
	// 	$http ({
	// 		method: 'GET',
	// 		url: '/jamieInstagram'
	// 	}).then(function(res) {
	// 		console.log(res.data)
	// 		for (var i = 0; i < data.data.length; i++) {
	// 			var profileObj = {};
	// 			profileObj.
	// 		}
	// 	})
	// })()