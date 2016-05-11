angular.module('myapp.catalog').
	service('CatalogServ', ['$http','$q',
		function($http, $q){

		var catalogs;

		this.getCatalogById = function(catId){
			for(var i=0; i<catalogs.length;i++){
				if(catalogs[i].id == catId){
					return catalogs[i];
				}
			}
		};

		this.getLatestCatalogItems = function(){
			var defer = $q.defer();
			var httpPromise = $http.get('app/data/latestCatalogItems.json');
			httpPromise.then(function(result){
				var items = result.data;
				for(var i=0;i<items.length;i++){
					items[i].id = i;
				}
				defer.resolve(items);
			});

			return defer.promise;
		};


		this.getCatalogItems = function(catalogId){
			var defer = $q.defer();
			var httpPromise = $http.get('http://localhost:5000/v1/categories/'+catalogId+'/items/JSON');
			httpPromise.then(function(result){
				var items = result.data;
				for(var i=0;i<items.length;i++){
					items[i].id = i;
				}
				defer.resolve(items);
			});

			return defer.promise;
		};

		this.getCatalogs = function(){
			var defer = $q.defer();
			var httpPromise = $http.get('http://localhost:5000/v1/categories/items/JSON');
			httpPromise.then(function(result){
				var items = result.data.Categories;
				catalogs = items;
				defer.resolve(catalogs);
			});

			return defer.promise;
		};

	}]);