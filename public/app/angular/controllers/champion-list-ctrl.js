/**
* ChampionListCtrl Module
*
* Champion List Controller
*/
angular.module('ChampionListCtrl', []).
	controller('ChampionListCtrl', ['$scope', '$http', function ($scope, $http) {
    //fetch all champions data
		$http.get('services/champion/all', {'cache' : true}).
			success(function (response, status){
				$scope.champions = response.data;
			}).
			error(function (response, status){
				alert("Request failed Status Code : " + status);
		  });
	}]);