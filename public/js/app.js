'use strict';
var ang = require('../lib/angular.shim');
//require('../lib/parallax.shim');

var includes = [
    require('../../modules/proposal/client')(ang)
];

var moduleName = "justineAndCorybill";

// Declare app level module which depends on filters, and services
ang.module(moduleName, includes).
    config(['$routeProvider', '$locationProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);