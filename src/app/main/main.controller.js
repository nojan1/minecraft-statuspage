'use strict';

/* global console */

angular.module('minecraftNew')
    .controller('MainCtrl', function ($scope, Servers, notify) {
      	Servers.get().then(function(servers){
			$scope.servers = servers;
		});
	
		Servers.events(function(messageText, servers){
			notify({message: messageText, duration: 0});
			console.log(messageText);
			
			$scope.servers = servers;
		});
  });
