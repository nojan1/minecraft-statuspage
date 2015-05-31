'use strict';

angular.module('minecraftNew').factory('Servers', function($http, $q, $interval){
	var serverCache = false;

	var getServers = function(){
		var defer = $q.defer();
		
		$http.get('http://nyclon.crabdance.com/minecraft/backend/servers.php').success(function(data){
			data.sort(function(a, b){
  				return a.isOnline === b.isOnline ? 0 : 1;
			});
			data.reverse();
			
			defer.resolve(data);
		});
		
		return defer.promise;
	};

	var findServer = function(list, single){
		for(var i = 0; i < list.length;i++){
			if(list[i].servername === single.servername){
				return i;
			}
		}
		
		return -1;
	};
	
	var createEventListener = function(callback){
		return $interval(function(){
			getServers().then(function(servers){
				if(serverCache){
					servers.forEach(function(server){
						var serverIndex = findServer(serverCache, server);
						
						if(serverIndex === -1){
							callback('Server ' + server.servername + ' was added');
							return;
						}
						
						
						if(server.query && server.query.players){
							var newPlayers = [];
							server.query.players.forEach(function(player){
								if(!serverCache[serverIndex].query || !serverCache[serverIndex].query.players){
									return;	
								}
								
								if(serverCache[serverIndex].query.players.indexOf(player) === -1){
									newPlayers.push(player);	
								}
							});

							if(newPlayers.length > 0){
								callback(newPlayers.join(',') + ' joined ' + server.servername);	
							}
						}
					});
				}
				
				serverCache = servers;
			});
		}, 10000);
	};
	
	return {
		get: getServers,
		events: createEventListener
	}; 
});