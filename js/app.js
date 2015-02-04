var app = angular.module('noServer', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home/home.html',
			controller: 'homeCtrl'
		})
		.when('/about', {
			templateUrl: 'about/about.html',
			controller: 'aboutCtrl'
		})
		.when('/portfolio', {
			templateUrl: 'portfolio/portfolio.html',
			controller: 'portfolioCtrl'
		})
		.when('/services', {
			templateUrl: 'services/services.html',
			controller: 'servicesCtrl'
		})
		.when('/weddings', {
			templateUrl: 'weddings/wedding.html',
			controller: 'weddingCtrl'
		})
		.when('/blog', {
			templateUrl: 'blog/blog.html',
			controller: 'blogCtrl'
		})
		.when('/contact', {
			templateUrl: 'contact/contact.html',
			controller: 'contactCtrl'
		})
		.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'loginCtrl'
		})
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
		.otherwise('/', {
			redirectTo: '/'
		})
			
	
})

// updated

		