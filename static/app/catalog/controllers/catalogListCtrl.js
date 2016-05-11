angular.module('myapp.catalog').
	controller('CatalogListCtrl',['CatalogServ', '$scope', '$routeParams',
		function(CatalogServ, $scope, $routeParams){

			var promise = CatalogServ.getCatalogs();

			promise.then(function(data){
				$scope.catalogs = data;
			}, function(){
				console.log('error');
			});

			$scope.selectedItemName = $routeParams.name;
			promise = CatalogServ.getCatalogItems($routeParams.id);

			promise.then(function(data){
				$scope.catItems = data.CategoryItems;
			}, function(){
				console.log('error fetchinf latest items');
			});

			$scope.addNewCatalogItem = function(){

			};

}]);