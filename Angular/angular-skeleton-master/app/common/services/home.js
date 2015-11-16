angular.module('home.service',[])
.service('homeService',['$q','$timeout','$rootScope','$location', homeService]);

function homeService($q,$rootScope,$timeout,$location) {
	var service = {};
	var employees = [
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
	function employeeName(username) {
		return $q(function(resolve, reject) {
			for(var i=0;i<employees.length;i++) {
				//console.log(employees[i]['username']);
				console.log(username);
				if(employees[i]["username"]==username){
					resolve(employees[i]["name"]);
					//break;
				} else {
					reject('Not registered');
				}
			}
		});
	}
	function employeeInfo(username) {
		return $q(function(resolve, reject) {
			for(var i=0;i<employees.length;i++) {
				if(employees[i]["username"]==username){
					resolve(employees[i]);
					break;
				} 
			}
		});
	}

	function employeesList() {
		return $q(function(resolve, reject) {
			if(typeof employees == 'object'){
				resolve(employees);
			} else {
				reject('No Employees');
			}
		});
	}

	function updateEmployeeInfo(objParams) {
		employees.push(objParams);
		return $q(function(resolve, reject) {
			if(typeof employees == 'object'){
				resolve(employees);
			} else {
				reject('Cannot update');
			}
		});
	}
	function deleteEmployee(username) {
		for(var i=0;i<employees.length;i++) {
			if(employees[i]["username"]==username){
				delete $rootScope.employees[i];
				$location.path('/home');
				break;
			}
		}  
		return $rootScope.employees;
	}

	function addEmployee(objParams) {
		employees.push(objParams);
		return $q(function(resolve, reject) {
			if(typeof employees == 'object'){
				resolve(employees);
			} else {
				reject('Cannot add');
			}
		});
	}
	service.employeeName = employeeName;
	service.employeeInfo = employeeInfo;
	service.employeesList = employeesList;
	service.updateEmployeeInfo = updateEmployeeInfo;
	service.deleteEmployee = deleteEmployee;
	service.addEmployee = addEmployee;
	return service;
};