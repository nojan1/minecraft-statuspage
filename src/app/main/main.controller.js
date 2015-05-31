'use strict';

/* global console */

angular.module('minecraftNew')
    .controller('MainCtrl', function ($scope, Servers, notify) {
      	Servers.get().then(function(servers){
			$scope.servers = servers;
		});
	
		Servers.events(function(message){
			notify({message: message, duration: 0});
			console.log(message);
		});
  });
