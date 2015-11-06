angular.module('home.service',[]).service('homeService',[homeService]);

function homeService() {
	var service = {};
	var employees = {
			'abc@gmail.com' : {
								'name'		: 'Atul Mishra',
								'email'		: 'abc@gmail.com',
								'age'		: 28,
								'gender'	: 'Male'
								},
			'pqr@gmail.com' : {
								'name'		: 'Pratima Chaturvedi',
								'email'		: 'pqr@gmail.com',
								'age'		: 26,
								'gender'	: 'Female'
								},
			'lmn@gmail.com' : {
								'name'		: 'Sidhika Khandelwal',
								'email'		: 'lmn@gmail.com',
								'age'		: 15,
								'gender'	: 'Female'
								}
		}

	function getName( username ) {
		var name = "";

		if(employees[username]!=undefined){
			name = employees[username]['name'];
		} else {
			name = "New Users";
		}
		return name;
	}

	function getAll(){
		return employees;
	}

	function getData(username){
		if(employees[username]!= undefined){
			data = employees[username];
		}
		return data;
	}

	function updateData(username){
		if(employees[username] != undefined && angular.isObject(employees[username])){
			return employees[username]
		}
	}

	function deleteData(username){
		delete employees[username];
		return employees;
	}

	service.getName		= getName;
	service.getAll		= getAll;
	service.getData		= getData;
	service.updateData	= updateData;
	service.deleteData	= deleteData;
	return service;
};