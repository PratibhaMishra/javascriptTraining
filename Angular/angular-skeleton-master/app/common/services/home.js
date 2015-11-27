angular.module('home.service', [])
.service('homeService',[homeService]);

function homeService(){
	var service ={};
	var employees = [
		{
			'name'  		: 'Pratibha Mishra',
			'city'			: 'Nashik',
			'email'			: 'pratibha@gmail.com',
			'age'			: 26,
			'gender'		: 'Female',
			'qualification'	: 'M.C.A'
		},
		{
			'name'  		: 'Richa Dagar',
			'city'			: 'Jaipur',
			'email'			: 'richa@gmail.com',
			'age'			: 25,
			'gender'		: 'Female',
			'qualification'	: 'B.Tech'
		},
		{
			'name'  		: 'Ashwini Gawade',
			'city'			: 'Mumbai',
			'email'			: 'ashwini@gmail.com',
			'age'			: 25,
			'gender'		: 'Female',
			'qualification'	: 'B.Tech'
		}
	]
	function getName(username){
		var name = "";
		if(employees[username]!= undefined){
			name = employees[username]['name'];
		} else {
			name = "New User"
		}
		return name;
	}

	function getAll(){
		return employees;
	}

	function getData(username){
		var data = "";
		if(employees[username]!=undefined){
			data = employees[username];
		}
		return data;
	}

	function updateData(username){
		if(employees[username] != undefined && angular.isObject(employees[username])){
			return employees[username];
		}
	}

	service.getName		= getName;
	service.getAll		= getAll;
	service.getData		= getData;
	service.updateData	= updateData;
	return service;
}