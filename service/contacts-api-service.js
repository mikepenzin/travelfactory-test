'use strict';

var contactsAPIService = angular.module("contactsAPIService", []);

contactsAPIService.service("contactsAPIService", ['$http', function($http) {
    var self = this;

    self.getDataFromAPI = function() {
        return $http.get('http://open.mapquestapi.com/geocoding/v1/address?key=j6GCAD66jVbGdH0w6BGlGALdPM2RWdWJ&location=Paris,France');
    };

    return self;
}]);