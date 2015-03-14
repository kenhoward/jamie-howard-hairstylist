var app = angular.module('noServer');

app.controller('aboutCtrl', function($scope, $location) {
	$scope.toAbout = function() {
		$location.path('/about');
	}
})