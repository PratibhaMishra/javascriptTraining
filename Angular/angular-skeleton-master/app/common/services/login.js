angular.module('login.service',[])
.service('loginService',['$q','apiLocalStorageService',loginService]);

function loginService($q,apiLocalStorageService) {
	var service = {};
	var credentials = { 'abc@gmail.com' : '123456' ,'xyz@gmail.com' : '123456','pqr@gmail.com' :'123456', 'abhishek@gmail.com' : '123456'} ;

	function login(username,password) {
		return $q(function(resolve, reject) {
			var loginValid= false;
			if(credentials[username]!=undefined  && credentials[username] == password){
					resolve(credentials[username]);
			} else {
				reject(false);
			}			
		});
	}

	function authenticate() {
		return $q(function(resolve, reject) {
		var localTokenId = apiLocalStorageService.get('tokenid');
			if (localTokenId!=undefined) {
				resolve(true);
			}else{
				reject(false);
			}
		});
	}

	service.login = login;
	service.authenticate = authenticate;
	return service;
};