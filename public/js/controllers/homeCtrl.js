var app = angular.module('noServer');

app.controller('homeCtrl', function($scope) {
	$scope.homeInterval = 3000;
	var slides = $scope.slides = ['images/carousel1.jpg', 'images/carousel2.jpg', 'images/carousel3.jpeg'];
	// $scope.addSlide = function() {
	// 	var newWidth = 600 + slides.length + 1;
	// 	slides.push ({
	// 		image: 'images/carousel1.jpg', 'images/carousel2.jpg', 'images/carousel3.jpeg'
	// 	})
	// };
	for (var i = 0; i < 1; i++) {
		// $scope.addSlide();
	}
})
