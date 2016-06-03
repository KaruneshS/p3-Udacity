/*Starting point of angulat app
*/
var app = angular.module('myapp',[
		'ui.bootstrap', 
		'ngRoute',
		'myapp.catalog'
		]);
	app.config(['$routeProvider',
		function($routeProvider){
			//routing configuration
			$routeProvider
			   .when('/catalog', {
			   	controller: 'CatalogLatestListCtrl',
			   	templateUrl: 'static/app/templates/catalogs.html'
			  });

			$routeProvider
			   .when('/catalog/:name/:id', {
			    templateUrl: 'static/app/templates/catalogItems.html',
			    controller: 'CatalogListCtrl'
			  });

			$routeProvider.otherwise('/catalog');

	}]);
