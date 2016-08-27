(function () {
    'use strict';

    angular.module('app').controller('contactLetter', contactLetter);

    contactLetter.$inject = ['$scope', '$stateParams', 'contacts'];;

    function contactLetter($scope, $stateParams, contacts) {
        contacts.getContacts().then(function (result) {
            $scope.letterContacts = [];

            result.data.forEach(function (item) {
                var initial = item.fullname;

                if ($stateParams.letter === initial.toLowerCase()) {
                    $scope.letterContacts.push(item);

                    if (!$scope.initial) {
                        $scope.initial = initial;
                    }
                }
            })
        })
    }
})();