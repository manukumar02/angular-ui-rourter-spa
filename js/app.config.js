(function () {
    'use strict';

    angular.module('app').config(routeConfig);
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('contactList', {
            url: '/contacts',
            controller: 'contactList',
            templateUrl: './views/contactList.html'
        })

        $urlRouterProvider.when('', '/contacts')
    }
})();