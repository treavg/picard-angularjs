# picard-angularjs
AngularJS module for interacting with Picard.io API.

# Bower Install
bower install brigmecham/picard-angularjs

# Usage

```javascript
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
.controller("Ctrl", ['$scope', 'picard', 'picardAdmin', function($scope, picard, picardAdmin){
               // get the stack id using the picard get function
               picard.get("/admin/stackId",{}).then(function(res){
                   $scope.stack = res;
               })
               // get the stack id using the picardAdmin stackGetId function
               picardAdmin.stackGetid({}).then(function(res){
                   $scope.stack2 = res;
               });
           }]);
```

    
