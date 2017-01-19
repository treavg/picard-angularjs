# picardio-angularjs
AngularJS module for interacting with Picard.io API.

#H1 Bower Install
bower install brigmecham/picardio-angularjs

# H1 Usage

```javascript
angular.module('app', ['picardio'])
 .constant('picardioConfig', {
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

    
