(function () {
    'use strict';

    angular.module('app').factory('contacts', contacts);

    contacts.$inject = ['$http'];

    function contacts($http) {
        return {
            getContacts: function () {
                return $http.get('/contactsStub.json');
            }
        };
    }
}());
