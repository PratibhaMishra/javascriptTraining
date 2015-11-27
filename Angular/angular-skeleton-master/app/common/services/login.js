angular.module('login.service', [])
.service('loginService',[loginService]);

function loginService(){
	var service = {};
	service.getHome = getHome;
	service.login = login;
	return service;

	function getHome(){
		return 'Welcome to Login';
	}

	function login(username, password){
		var login = false;
		var combinations = {'pratibha@gmail.com':'123456', 'richa@gmail.com':'123456', 'ashwini@gmail.com':'123456'};
		if( combinations[username] && combinations[username] == password) {
			login = true;
		}
		return login;
	}
}