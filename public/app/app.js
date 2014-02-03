/**
* lolChamps Module
*
* Main application module
*/
angular.module('lolChamps', ['ngRoute', 'ChampionListCtrl', 'ChampionDetailCtrl']).
	config(['$routeProvider', function ($routeProvider) {
		//routes
		$routeProvider.when('/champion/list', {templateUrl: '/partials/champion-list.html', controller: 'ChampionListCtrl'});
		$routeProvider.when('/champion/detail/:championId', {templateUrl: '/partials/champion-detail.html', controller: 'ChampionDetailCtrl'});

		//default route
		$routeProvider.otherwise({redirectTo: '/champion/list'});
	}]);