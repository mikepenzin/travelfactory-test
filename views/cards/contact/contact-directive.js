'use strict'

angular.module("contactView", ['contactModal'])

.directive("contactView", function() {

    return {
        restrict: 'A',
        scope: {
            contactInfo: "="
        },
        transclude: true,
        templateUrl: 'views/cards/contact/contact-view.html',
        link: function(scope, element, attrs) {
            
        }
    };

});