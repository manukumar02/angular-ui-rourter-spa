(function () {
    'use strict';

    angular.module('app').run(function ($rootScope) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            //console.log(event, toState, toParams, fromState, fromParams, options);
            $rootScope.spinner.removeClass('ng-hide');
        });

        $rootScope.$on('$viewContentLoaded', function (event) {
            console.log(event);
            $rootScope.spinner.addClass('ng-hide');
        })
    });
}());