angular.module('login.controller', ['services']).controller('loginCtrl',['$scope', '$location', 'loginService', LoginController])

function LoginController($scope, $location, loginService) {
	//$scope.home = loginService.getHome();
	$scope.error = "";
	$scope.login = function(){
		if(loginService.login( $scope.username, $scope.password)){
			$location.path('/home/'+$scope.username);
		} else {
			$scope.error="Username or password incorrect";
		}
	}
}