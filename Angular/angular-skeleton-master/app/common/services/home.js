angular.module('home.service',[]).service('homeService',[homeService]);

function homeService() {
	var service = {};
	service.get = get;
	return service;

	function get( username ) {
		return username;
	}
};