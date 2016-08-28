(function () {
    'use strict';

    angular.module('app').directive('spinner', spinner);
    spinner.$inject = ['$rootScope'];

    function spinner($rootScope) {
        return {
            restrict: 'E',
            template: '<div class="modal"><span class="spinner"></span></div>',
            link: function (scope, element) {
                $rootScope.spinner = element;
            }
        }
    }
}());