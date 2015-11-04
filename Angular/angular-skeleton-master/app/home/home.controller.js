angular.module('home.controller',['services'])
	.controller('homeCtrl',['$scope','homeService', HomeController])

function HomeController( $scope, homeService ) {
	$scope.home = homeService.get();
	homeService.get($scope.username);
};