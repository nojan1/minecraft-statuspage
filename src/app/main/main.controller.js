'use strict';

/* global console */

angular.module('minecraftNew')
    .controller('MainCtrl', function ($scope, Servers, notify) {
      	Servers.get().then(function(servers){
			$scope.servers = servers;
		});
	
		Servers.events(function(messageText){
			notify({message: messageText, duration: 0});
			console.log(messageText);
		});
  });
