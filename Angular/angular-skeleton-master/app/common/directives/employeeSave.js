angular.module('employee.save', ['home.service'])
.directive('employeeSave',['$timeout','$location','homeService', function($timeout,$location,homeService) {
	return {
		restrict: 'E',
		templateUrl: 'app/home/views/employee-select.html',
		link : function($scope, $element, attr) {
			$element.on("click",function(){
				$scope.isDisable = attr.isDisable;
				$scope.inProcess = true;
				homeService.updateEmployeeInfo(attr.employee).then(
					function(response) {
						//$rootScope.employees = response;
						$timeout(function(){
							$scope.inProcess = false;
							$location.path('/home/');
						},3000);
					}
				);
			});
		}
	};
}]);