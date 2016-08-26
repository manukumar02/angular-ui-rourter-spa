(function () {
    'use strict';

    angular.module('App').config(routeConfig);
    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
    	$stateProvider.state('contactList', {
    		url: '/contacts',
    		controller: 'contactList'
    	})
    }
})();
