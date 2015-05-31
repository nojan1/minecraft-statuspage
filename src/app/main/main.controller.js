'use strict';

angular.module('minecraftNew')
    .controller('MainCtrl', function ($scope, Servers) {
      	Servers.get().then(function(servers){
			$scope.servers = servers;
		});
  });
