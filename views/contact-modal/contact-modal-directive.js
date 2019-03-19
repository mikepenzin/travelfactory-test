'use strict'

var contactModal = angular.module("contactModal", []);

contactModal.directive("contactModal", function() {
    return {
        restrict: 'E',
        scope: {
            send: '=',
            contact: '='
        },
        templateUrl: 'views/contact-modal/contact-modal.html',
        link: function(scope, element, attrs) {
            scope.sendData = function(data){
                data.userpic ? data.userpic : data.userpic = "./assets/img/janeth carton.jpg";
                scope.send(data);
                
                scope.contact = {
                    id: 0,
                    contactName: "",
                    userpic: "./assets/img/janeth carton.jpg",
                    address: "",
                    company: {
                        companyName: "",
                        address: "",
                        city: "",
                        role: ""
                    },
                    phoneNumber: ""
                }
                
                scope.validatePhonenumber = function(number) {
                    var phoneNumberPattern = /\+?\d+\s?\d*/;  
                    return phoneNumberPattern.test(number);
                }
            }
        }
    };

});