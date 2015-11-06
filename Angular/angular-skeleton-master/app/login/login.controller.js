angular.module('login.controller', ['services'])
	.controller('loginCtrl',['$scope', 'loginService', '$location', LoginController])

function LoginController($scope, loginService, $location){
	$scope.error = "";
	$scope.login = function () {
		if (loginService.authenticate( $scope.username, $scope.password ) ){
			$location.path('/home/'+$scope.username);
		} else {
			$scope.error = "Username or password is incorrect";
		}
	}
};