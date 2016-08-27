(function () {
    'use strict';

    angular.module('app').controller('contactList', contactList);
    contactList.$inject = ['$scope', 'contacts'];

    function contactList($scope, contacts) {
        $scope.contactlist = null;

        contacts.getContacts().then(function (response) {
            var tmp = [];

            response.data.forEach(function (item) {
                var initial = item.name.slice(0, 1);

                if (tmp.indexOf(initial) === -1) {
                    tmp.push(initial);
                }
            });
            $scope.contactlist = tmp;
        });
    }
})();