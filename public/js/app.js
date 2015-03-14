var app = angular.module('noServer', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		})
		.when('/portfolio', {
			templateUrl: 'templates/portfolio.html',
			controller: 'portfolioCtrl'
		})
		.when('/services', {
			templateUrl: 'templates/services.html',
			controller: 'servicesCtrl'
		})
		.when('/weddings', {
			templateUrl: 'templates/wedding.html',
			controller: 'weddingCtrl'
		})
		.when('/blog', {
			templateUrl: 'templates/blog.html',
			controller: 'blogCtrl'
		})
		.when('/contact', {
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		})
		// .when('/login', {
		// 	templateUrl: 'login/login.html',
		// 	controller: 'loginCtrl'
		// })
		// .when('/login', {
		// 	templateUrl: 'login/login.html',
		// 	controller: 'loginCtrl'
		// })
		// .when('/dashboard/:userId', {
		// 	templateUrl: 'dashboard.html',
		// 	controller: 'dashboardCtrl',
		// 	resolve: {
		// 		userReference: function(firebaseService, $route) {
		// 			return firebaseService.getUser($route.current.params.userId)
		// 		},
		// 		thingsReference: function(firebaseService, $route) {
		// 			return firebaseService.getThings($route.current.params.userId)
		// 		}
		// 	}
		// })


		// .otherwise('/', {
		// 	redirectTo: '/'
		// })
			
	
})

		