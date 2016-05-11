var app = angular.module('myapp',[
		'ui.bootstrap', 
		'ngRoute',
		'myapp.catalog'
		]);
	app.config(['$routeProvider',
		function($routeProvider){

			$routeProvider
			   .when('/catalog', {
			   	controller: 'CatalogLatestListCtrl',
			   	templateUrl: 'app/templates/catalogs.html'
			  });

			$routeProvider
			   .when('/catalog/:name/:id', {
			    templateUrl: 'app/templates/catalogItems.html',
			    controller: 'CatalogListCtrl'
			  });

			$routeProvider.otherwise('/catalog');

	}]);