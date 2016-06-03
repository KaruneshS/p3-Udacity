angular.module('myapp').
	controller('MainCtrl',['$scope',
		function($scope){

			$scope.setLogInFlag = function(){
				$scope.logInFlag = true;
			};

}]);