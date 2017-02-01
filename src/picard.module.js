'use strict';

/**
 * @ngdoc overview
 * @name picard
 * @module picard
 *
 * @description
 * The picard module provides access to the picard api.  The module consists of multiple services, each of which
 * expose functions that call a single endpoint.  Function arguments are Javascript Objects with fields corresponding
 * to endpoint parameters.
 *
 * @example
 <example module="picardExample">
 <file name="script.js">
 angular.module('picardExample', ['picard'])
 // set the picard endpoint to your stack
 .constant('picardConfig', {
                base_url: 'https://www.picard.io/',
                fullResponse: false,
                config: {
                    "cache": false
                }
            })
 // define a controller
 .controller("Ctrl", ['$scope', 'picard',  function($scope, picard){
                // get the stack id using the picard get function
                picard.get("/admin/stackId",{}).then(function(res){
                    $scope.stack = res;
                })
                // get the stack id using the picard
            }]);
 </file>
 <file name="index.html">
 <div ng-controller="Ctrl">
 <h1>Stack Information</h1>
 <pre>{{ stack | json}}</pre>
 </file>
 </example>
 */

angular
  .module('picard', []);
