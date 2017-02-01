angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardHubspot
* @module picard
* @description 
*/
.factory("Hubspot", ["$q", "$http", "picard", function ($q, $http, picard) {
  return {


/**
* @ngdoc function
* @name picard.service.picardHubspot#hubspotQuery
* @methodOf picard.service.picardHubspot
*
* @description
* Queries Hubspot<br/>
* # Endpoint: <br/>
* /hubspot/query<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardHubspot.hubspotQuery(http_request_params)
 ```
* @param {string} query <pre>{"default": null, "comment": "Query to execute"}</pre>
* @param {string} db <pre>{"default": "hubspot", "comment": "Database to query"}</pre>
* @param {string} method <pre>{"default": "get", "comment": "Query method"}</pre>
* @param {Object} params <pre>{"default": {}, "comment": "Query params"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
hubspotQuery: function(http_request_params){
    return picard.post("/hubspot/query", http_request_params)
},
  }
}])
