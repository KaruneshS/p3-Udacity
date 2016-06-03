/*
*	angular module to fetch latest catalog list
*/

angular.module('myapp.catalog').
	controller('CatalogLatestListCtrl',['CatalogServ', '$scope', '$rootScope',
		function(CatalogServ, $scope, $rootScope){

			//get all latest catalog items
			var getLatestCatalogItems = function(){
				promise = CatalogServ.getLatestCatalogItems();

				promise.then(function(data){
					$scope.latestCatItems = data.CategoryItems;
				}, function(){
					console.log('error fetchinf latest items');
				});
			};

			//get catalog parent lists
			var promise = CatalogServ.getCatalogs();

			promise.then(function(data){
				$scope.catalogs = data;
			}, function(){
				console.log('error');
			});

			getLatestCatalogItems();

			//set flag if user is logged in
			$scope.setLogInFlag = function(){
				$rootScope.logInFlag = true;
			};

}]);