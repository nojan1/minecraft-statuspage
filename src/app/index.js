'use strict';

angular.module('minecraftNew', ['ngAnimate', 'ngCookies', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'cgNotify'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });

angular.module('minecraftNew').filter('firstserverimage', function() {
		return function(input){
					if(input && input.length > 0){
						return input[0];
					}else{
						return 'default.png';
					}
		};
	})
	
	.filter('isonlinestyle', function(){
		return function(input){
				return input ? 'serveronline' : 'serveroffline';
		};		
	})
	
	.filter('join', function(){
		return function(input, delimiter){
		    if(!input){
				return '';
		    }
		    
			var ret = '';
			input.forEach(function(item, index){
				ret += item;
				
				if(index !== input.length -1 ){
					ret += delimiter;
				}
			});
			
			return ret;
		};
	});
