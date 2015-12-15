angular.module("routerModule",['ngRoute'])
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/',{
			templateUrl:'app/components/main/mainView.html'

		})
		.when('/ravi',{
			templateUrl:'app/components/ravi/home/raviView.html'
		})
		.otherwise({
			redirectTo:'/'
		});
	}]);