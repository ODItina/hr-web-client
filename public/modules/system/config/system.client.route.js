'use strict';
/**
 * Created by Dominic on 18-Sep-2014.
 */

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.
        state('index',{
            url: '/',
            templateUrl: 'modules/system/views/index.client.html'
        });
}]);