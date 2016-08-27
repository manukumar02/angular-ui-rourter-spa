(function () {
    'use strict';

    angular.module('app').config(routeConfig);
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('contactList', {
            url: '/contacts',
            controller: 'contactList',
            templateUrl: './views/contactList.html'
        }).state('contactLetter', {
            url: '/contacts/:letter',
            controller: 'contactLetter',
            templateUrl: './views/contactLetter.html',
            onEnter: function () {
                console.log('Entered');
            }
        });

        $urlRouterProvider.when('', '/contacts')
    }
})();