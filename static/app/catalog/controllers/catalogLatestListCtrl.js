angular.module('myapp.catalog').
	controller('CatalogLatestListCtrl',['CatalogServ', '$scope',
		function(CatalogServ, $scope){

			var promise = CatalogServ.getCatalogs();

			promise.then(function(data){
				$scope.catalogs = data;
			}, function(){
				console.log('error');
			});

			promise = CatalogServ.getLatestCatalogItems();

			promise.then(function(data){
				$scope.latestCatItems = data;
			}, function(){
				console.log('error fetchinf latest items');
			});

}]);