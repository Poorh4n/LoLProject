/**
* ChampionDetailCtrl Module
*
* Champion Detail Controller
*/
angular.module('ChampionDetailCtrl', []).
	controller('ChampionDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
		//fetch all champions data
		$http.get('services/champion/detail/' + $routeParams.championId, {'cache' : true}).
			success(function (response, status){
				$scope.champion = response;
			}).
			error(function (response, status){
				alert("Request failed Status Code : " + status);
		  });
	}]);