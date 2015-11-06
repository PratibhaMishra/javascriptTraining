angular.module('home.route', ['ngRoute']).config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/home/:username', {
			templateUrl: 'app/home/views/home.html',
			controller: 'homeCtrl'
		}).when('/home/:username/:age/:gender/:name', {
			templateUrl: 'app/home/views/employeeData.html',
			controller: 'homeCtrl'
		}).when('/home/addEmployee', {
			templateUrl : 'app/home/views/addEmployee.html',
			controller : 'homeCtrl'
		}).otherwise('/homeError', {
			redirectTo: 'app/home/views/homeError.html'
		});
}]);