'use strict';

angular.module("contactsCardsController", [])

.controller("contactsCardsController", ['$scope', 'contactsAPIService', function($scope, contactsAPIService) {

    this._scope = $scope;
    this._contactsAPIService = contactsAPIService;
    this.selectedContact = {};
    this.contacts = [{
            id: 1,
            contactName: "John Smith",
            userpic: "./assets/img/john-smith.jpg",
            address: "Riviera State 32/106",
            company: {
                companyName: "Twitter Inc.",
                address: "796 Folsom Ave, Suite 600",
                city: "San Francisco, CA, 94107",
                role: "Graphic Designer"
            },
            phoneNumber: "(123) 456-7890"
        },
        {
            id: 2,
            contactName: "Michael Zimber",
            userpic: "./assets/img/michael zimber.jpg",
            address: "Riviera State 32/106",
            company: {
                companyName: "Twitter Inc.",
                address: "796 Folsom Ave, Suite 600",
                city: "San Francisco, CA, 94107",
                role: "Sales Manager"
            },
            phoneNumber: "(123) 456-7890"
        },
        {
            id: 3,
            contactName: "Alex Johnatan",
            userpic: "./assets/img/alex jonathan.jpg",
            address: "Riviera State 32/106",
            company: {
                companyName: "Twitter Inc.",
                address: "796 Folsom Ave, Suite 600",
                city: "San Francisco, CA, 94107",
                role: "CEO"
            },
            phoneNumber: "(123) 456-7890"
        },
        {
            id: 4,
            contactName: "Alex Johnatan",
            userpic: "./assets/img/alex jonathan.jpg",
            address: "Riviera State 32/106",
            company: {
                companyName: "Twitter Inc.",
                address: "796 Folsom Ave, Suite 600",
                city: "San Francisco, CA, 94107",
                role: "CEO"
            },
            phoneNumber: "(123) 456-7890"
        },
        {
            id: 5,
            contactName: "Sandra Smith",
            userpic: "./assets/img/sandra smith.jpg",
            address: "Riviera State 32/106",
            company: {
                companyName: "Twitter Inc.",
                address: "796 Folsom Ave, Suite 600",
                city: "San Francisco, CA, 94107",
                role: "Graphic Designer"
            },
            phoneNumber: "(123) 456-7890"
        },
        {
            id: 6,
            contactName: "John Smith",
            userpic: "./assets/img/john-smith.jpg",
            address: "Riviera State 32/106",
            company: {
                companyName: "Twitter Inc.",
                address: "796 Folsom Ave, Suite 600",
                city: "San Francisco, CA, 94107",
                role: "Graphic Designer"
            },
            phoneNumber: "(123) 456-7890"
        },
        {
            id: 7,
            contactName: "Monica Smith",
            userpic: "./assets/img/monica smith.jpg",
            address: "Riviera State 32/106",
            company: {
                companyName: "Twitter Inc.",
                address: "796 Folsom Ave, Suite 600",
                city: "San Francisco, CA, 94107",
                role: "Marketing Manager"
            },
            phoneNumber: "(123) 456-7890"
        },
        {
            id: 8,
            contactName: "Janeth Carton",
            userpic: "./assets/img/janeth carton.jpg",
            address: "Riviera State 32/106",
            company: {
                companyName: "Twitter Inc.",
                address: "796 Folsom Ave, Suite 600",
                city: "San Francisco, CA, 94107",
                role: "Graphic Designer"
            },
            phoneNumber: "(123) 456-7890"
        }
    ];

    var self = this;
    
    self.getMapsData = function() {
        this._contactsAPIService.getDataFromAPI()
            .then(function successCallback(response) {
                var info = JSON.parse(response);
                console.log(info);
                return info;
            }, function errorCallback(response) {
                console.warn("Unable to receive data from API.")
            }
        );
    }
    
    self.getAllContacts = function() {
        return self.contacts;
    }
    
    self.openNewContactModal = function(){
        var element = angular.element('#contactModal');
        element.modal({
            backdrop: 'static',
            keyboard: true
        });
    }
    
    self.getSelectedContact = function(){
        return self.selectedContact;
    }
    
    self.selectContact = function(index) {
        self.selectedContact = self.contacts[index];
        self.openNewContactModal()
    }
    
    self.saveContact = function(data){
        if (data.id && data.id != 0) {
            self.contacts[data.id-1] = data;
        } else {
            data.id = self.contacts.length + 1;
            self.contacts.push(data);
        }
        
        self.selectedContact = {};
    }
    
    self.deleteContact = function(index){
        self.contacts.splice(index, 1);
    }
    
    return self;

}]);