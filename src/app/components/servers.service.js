'use strict';

angular.module('minecraftNew').factory('Servers', function($http, $q, $rootScope){
	var serverCache = false;

	var getServers = function(){
		var defer = $q.defer();
		
		$http.get('http://nyclon.crabdance.com/minecraft/backend/servers.php').success(function(data){
			defer.resolve(data);
		});
		
		return defer.promise;
	};

	return {
		get: getServers
	}; 
});