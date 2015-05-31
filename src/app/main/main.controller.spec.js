'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('minecraftNew'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));
});
