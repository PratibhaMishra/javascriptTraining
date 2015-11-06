angular.module('home.controller',['services'])
	.controller('homeCtrl',['$scope', '$routeParams', '$location', 'homeService', homeController])

function homeController($scope, $routeParams, $location, homeService) {

	$scope.getEmployeeName = function(){
		$scope.name = homeService.getName( $routeParams.username )
		$location.path('/home/'+$routeParams.username)
	};

	$scope.getAllEmployee = function(){
		$scope.employees = homeService.getAll();
	};

	$scope.showEmployeeData = function(email){
		if(email){
			$scope.employee = homeService.getData(email);
			$location.path('/home/'+$scope.employee.email+'/'+$scope.employee.age+'/'+$scope.employee.gender+'/'+$scope.employee.name);
		}
	};

	$scope.getEmployeeData = function() {
		$scope.employee = homeService.getData(email);
	}

	$scope.updateEmployeeData = function(){
		if(homeService.updateData($scope.employee.email)){
			$location.path('/home/'+$scope.employee.email)
		}
	}

	$scope.deleteEmployeeData = function(){
		$scope.employee = homeService.deleteData(email);
		$location.path('/home/'+$routeParams.email)
	}

	$scope.addEmployeeData = function(){
		$location.path('/home/addEmployee/')
	}
};