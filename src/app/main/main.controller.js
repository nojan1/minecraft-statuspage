'use strict';

angular.module('minecraftNew')
    .controller('MainCtrl', function ($scope, Servers, notify) {
      	Servers.get().then(function(servers){
			$scope.servers = servers;
		});
	
		Servers.events(function(message){
			notify({message: message, duration: 0});
		});
  });
