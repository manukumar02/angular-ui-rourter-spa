(function () {
    'use strict';

    angular.module('app').controller('contactList', contactList);
    contactList.$inject = ['$scope', 'contacts'];

    function contactList($scope, contacts) {
        $scope.contactlist = null;

        contacts.getContacts().then(function (response) {
            //TODO: business logic here
            var tmp = [];

            response.data.forEach(function (item) {
                var initial = item.fullname;

                if (tmp.indexOf(initial) === -1) {
                    tmp.push(initial);
                }
            });
            $scope.contactlist = tmp;
        });
    }
})();