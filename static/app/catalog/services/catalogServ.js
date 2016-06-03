/*Angular module with services to perform CRUD operation on catalog items
*/

angular.module('myapp.catalog').
	service('CatalogServ', ['$http','$q',
		function($http, $q){

		var catalogs;

		//Service function to get latest catalog items
		this.getLatestCatalogItems = function(){
			var defer = $q.defer();
			var httpPromise = $http.get('http://localhost:5000/v1/categories/items/latest/JSON');
			httpPromise.then(function(result){
				var items = result.data;
				for(var i=0;i<items.length;i++){
					items[i].id = i;
				}
				defer.resolve(items);
			});

			return defer.promise;
		};

		//Service function to get catalog items by id
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

		//Service function to get all catalogs
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

		//Service function to add new catalog item
		this.addNewCatalogItem = function(cat_id, name, desc){
			var defer = $q.defer();
			var requestURL = 'http://localhost:5000/v1/categoryItem/'+cat_id+'/new?name='+name+'&desc='+desc; 
			console.log(requestURL);
			var httpPromise = $http.post(requestURL);
			httpPromise.then(function(result){
				defer.resolve(result);
			});

			return defer.promise;
		};

		//Service function to update catalog item
		this.updateCatalogItem = function(id, name, desc){
			var defer = $q.defer();
			var requestURL = 'http://localhost:5000/v1/categoryItem/'+id+'/edit?name='+name+'&desc='+desc; 
			console.log(requestURL);
			var httpPromise = $http.post(requestURL);
			httpPromise.then(function(result){
				defer.resolve(result);
			});

			return defer.promise;
		};

		//Service function to delete catalog item
		this.deleteCatalogItem = function(id){
			var defer = $q.defer();
			var requestURL = 'http://localhost:5000/v1/categoryItem/'+id+'/delete'; 
			console.log(requestURL);
			var httpPromise = $http.delete(requestURL);
			httpPromise.then(function(result){
				defer.resolve(result);
			});

			return defer.promise;	
		};

	}]);