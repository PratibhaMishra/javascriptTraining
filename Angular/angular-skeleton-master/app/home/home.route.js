angular.module('home.route',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/home/:username', {
		templateUrl : 'app/home/views/home.html',
		controller : 'homeCtrl'
	}).when('/home/editEmployee/:username', {
		templateUrl  :'app/home/views/editEmployee.html',
		controller : 'homeCtrl'
	}).otherwise('/homeError', {
		redirectTo: 'app/home/views/homeError.html'
	});
}]);