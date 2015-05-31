'use strict';

angular.module('minecraftNew')
    .controller('MainCtrl', function ($scope, $http) {
      	$http.get('http://nyclon.crabdance.com/minecraft/backend/servers.php').success(function(data){
		$scope.servers = data;
	});
  });
