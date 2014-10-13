'use strict';
/**
 * Created by Dominic on 18-Sep-2014.
 */
var app = angular.module('appname',
[
    'ui.router',
    'ui.bootstrap',
    'ngResource',
    'ui.utils'
]).config(['$locationProvider', function($locationProvider){
        $locationProvider.hashPrefix('!');
    }]);


angular.element(document).ready(function() {

    angular.bootstrap(document, ['appname']);
});