angular.module('myapp.catalog').
	controller('CatalogListCtrl',['CatalogServ', '$scope', '$routeParams', '$rootScope',
		function(CatalogServ, $scope, $routeParams, $rootScope){

			//get all items belonging to particular catalog
			var getCatalogItems = function(id){
				promise = CatalogServ.getCatalogItems(id);

				promise.then(function(data){
					$scope.catItems = data.CategoryItems;
				}, function(){
					console.log('error fetchinf latest items');
				});
			};

			var promise = CatalogServ.getCatalogs();

			promise.then(function(data){
				$scope.catalogs = data;
			}, function(){
				console.log('error');
			});

			//set selected catalof metadata
			$scope.selectedItemName = $routeParams.name;
			$scope.selectedItemId = $routeParams.id;
			
			getCatalogItems($routeParams.id);

			//Controller function to add new item to particular catalog
			$scope.addNewCatalogItem = function(cat_id){

				promise = CatalogServ.addNewCatalogItem(cat_id, $scope.name_, $scope.desc_);

				promise.then(function(result){
					console.log("Catalog Item saved successfully!");
					getCatalogItems(cat_id);
					$scope.hideAddModal();
				}, function(){
					console.log('error creating new item');
				});
			};

			//Controller function to update item of particular catalog
			$scope.updateCatalogItem = function(){

				promise = CatalogServ.updateCatalogItem($scope.eId_, $scope.name_, $scope.desc_);

				promise.then(function(result){
					console.log("Catalog Item updated successfully!");
					getCatalogItems($scope.selectedItemId);
					$scope.hideAddModal();
				}, function(){
					console.log('error updating item');
				});
			};

			//Controller function to delete item of particular catalog
			$scope.deleteItem = function(cat_id, id){
				promise = CatalogServ.deleteCatalogItem(id);
				
				promise.then(function(data){
					getCatalogItems(cat_id);
				}, function(){
					console.log('error fetchinf latest items');
				});
			};

			//Function to show modal window for updating catalog item
			$scope.editItem = function(id, ename_, edesc_){
				$scope.name_ = ename_;
				$scope.desc_ = edesc_;
				$scope.eId_ = id;
				$scope.editFlag = true;
				$("#addModal_").show();				
			};

			//Function to show modal window for adding new catalog item
			$scope.showAddModal = function(){
				$scope.name_ = "";
				$scope.desc_ = "";
				$scope.editFlag = false;
				$("#addModal_").show();
			};

			//Function to hide modal window used for updating/adding catalog item
			$scope.hideAddModal = function(){
				$("#addModal_").hide();
			};

			//Function to set log in flag to customize the view
			$scope.setLogInFlag = function(){
				$rootScope.logInFlag = true;
			};

}]);