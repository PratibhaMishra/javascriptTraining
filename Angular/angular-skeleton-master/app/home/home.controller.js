angular.module('home.controller',['services'])
.controller('homeCtrl',['$scope','$routeParams','$rootScope','$location','$timeout','apiLocalStorageService','homeService', HomeController])

function HomeController($scope,$routeParams,$rootScope,$location,$timeout,apiLocalStorageService,homeService) { 
	$rootScope.employees = [
		{
			'name': 'Aditya Bugadi',
			'username': 'abc@gmail.com',
			'address': 'Bund Garden',
			'email': 'abc@gmail.com',
			'age': 23,
			'gender': 'Male',
			'education': 'MCA'
		},
		{
			'name': 'Zahabia Maru',
			'username': 'xyz@gmail.com',
			'address': 'Bund Garden',
			'email': 'xyz@gmail.com',
			'age': 21,
			'gender': 'Female',
			'education': 'MCA'
		},
		{
			'name': 'Punit Shah',
			'username': 'pqr@gmail.com',
			'address': 'Bund Garden',
			'email': 'pqr@gmail.com',
			'age': 22,
			'gender': 'Male',
			'education': 'MCA'
		},
		{
			'name': 'Abhishek Kala',
			'username': 'abhishek@gmail.com',
			'address': 'Bund Garden',
			'email': 'abhishek@gmail.com',
			'age': 20,
			'gender': 'Male',
			'education': 'MCA'
		}
	];

	$scope.isEdit= false;
	if($routeParams.username){
		$rootScope.username = $routeParams.username;
		$scope.isEdit= true;
	}

	if (apiLocalStorageService.isSupported()) {
		 homeService.employeeInfo($routeParams.username).then(
			function(response) {
				$scope.employee = response;
			},function(rejected){
				$scope.error=rejected;
			}
		);
	}

	homeService.employeeName($routeParams.username).then(
		function(response) {
			$scope.name = response;
		},function(rejected){
			$scope.error=rejected;
		}
	);
	
	if (apiLocalStorageService.isSupported()) {
		 homeService.employeesList().then(
			function(response) {
				$rootScope.employees = response;
			},function(rejected){
				$scope.error=rejected;
			}
		);
	}
	
	$scope.updateEmployeeInfo = function (){
		$scope.inProcess = true;
		if (apiLocalStorageService.isSupported()) {
			homeService.updateEmployeeInfo($scope.employee).then(
				function(response) {
					$scope.employees = response;
					$timeout(function(){
						$scope.inProcess = false;
						$location.path('/home/');
					},3000);
				},function(rejected){
					$scope.error=rejected;
				}
			);
		}
	};
	$scope.deleteEmployee = function (username){
		homeService.deleteEmployee(username).then(
			function(response) {
				$rootScope.employees = response;
				$location.path('/home/'+ $rootScope.username);
			},function(rejected){
				$scope.error=rejected;
			}
		);
	};
	$scope.addEmployee = function (){
		if (apiLocalStorageService.isSupported()) {
			homeService.addEmployeeInfo($scope.employee).then(
				function(response) {
					$rootScope.employees = response;
					$location.path('/home/'+ $rootScope.username);
				},function(rejected){
					$scope.error=rejected;
				}
			);
		}
	};

	$scope.editEmployeeRedirect = function(username){
		$location.path('/home/employeeEdit/'+username);
	};

	$scope.editEmployeeSelected = function(index){
		if($scope.isSelected[index]){
			$scope.isSelected[index] = false;
		}else{
			$scope.isSelected[index] = true;
		}
	};

	$scope.clearLocalStorage = function() {
		apiLocalStorageService.clearAll();
		$location.path('/login');
		apiLocalStorageService.get('tokenid');
	}

	$scope.predicate = "name";
	$scope.reverse = true;

	$scope.order = function() {
		$scope.predicate = $scope.sortOption;
		$scope.reverse = ($scope.predicate === $scope.sortOption) ? !$scope.reverse : false;
	};
};