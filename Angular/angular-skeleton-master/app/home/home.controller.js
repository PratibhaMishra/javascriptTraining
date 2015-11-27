angular.module('home.controller', ['services']).controller('homeCtrl',['$scope', '$location', '$routeParams', 'homeService', HomeController])

function HomeController($scope, $location, $routeParams, homeService) {

	$scope.getEmployeeName = function(){
		$scope.name = homeService.getName($routeParams.username)
		$location.path('/home/'+$routeParams.username)
	};

	$scope.getAllEmployee = function(){
		$scope.employees = homeService.getAll();
	};

	$scope.showEmployeeData = function(email){
		$scope.employee = "";
		if(email){
			$scope.employee = homeService.getData(email)
			$location.path('/home/editEmployee/'+$scope.employee.email)
		}
	};

	$scope.getEmployeeData = function(){
		$scope.employee = homeService.getData($routeParams.username);
	}

	$scope.updateEmployee = function(){
		if(homeService.updateData($scope.employee.email)){
			$location.path('/home/'+$routeParams.username)
		}
	}
}