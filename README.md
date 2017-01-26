# picard-angularjs
AngularJS module for interacting with Picard.io API.

# Bower Install
bower install brigmecham/picard-angularjs

# Usage

```javascript
angular.module('app', ['picard'])
 .constant('picardConfig', {
    base_url: 'https://www.picard.io/', // your stack goes here
    fullResponse: false,
    config: {
        "cache": false
    }
 });

function YourCtrl(picard) {
    picard.get("/admin/stackId",{}).then(function(success){
        console.log(success);
    }, function(error){
        console.log(error);
    });
}
    
```

    
