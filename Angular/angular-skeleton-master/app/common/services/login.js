angular.module('login.service',[]).service('loginService',[loginService]);

function loginService() {
	var service = {};
	service.authenticate = authenticate;
	return service;

	function authenticate(username, password){
		var authLogin = false;
		var combinations = {'abc@gmail.com': '123456', 'pqr@gmail.com' : '123456', 'lmn@gmail.com' : '123456' };
		if(combinations[username] && combinations[username] == password){
			authLogin = true;
		} else {
			authLogin = false;
		}
		return authLogin;
	}
};
