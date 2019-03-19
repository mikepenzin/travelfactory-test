'use strict'

angular.module("contactsCardsView", ['contactModal', 'contactView', 'contactsCardsController'])

.directive("contactsCardsView", function() {

    return {
        restrict: 'A',
        scope: false,
        controller: 'contactsCardsController',
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'views/cards/cards-view.html',
        link: function(scope, element, attrs) {
//            var element = angular.element('#memoryGameModal');

        }
    };

});