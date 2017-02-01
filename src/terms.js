angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardTerms
* @module picard
* @description 
*/
.factory("picardTerms", ["$q", "$http", "picard", function ($q, $http, picard) {
  return {


/**
* @ngdoc function
* @name picard.service.picardTerms#usertosCreate
* @methodOf picard.service.picardTerms
*
* @description
* Add usertos agreement to a user<br/>
* # Endpoint: <br/>
* /terms/usertos<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardTerms.usertosCreate(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Tosform uuid to agree to"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
*/
usertosCreate: function(http_request_params){
    return picard.post("/terms/usertos", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardTerms#tosformList
* @methodOf picard.service.picardTerms
*
* @description
* Auth Endpoint, gets list of tosforms, filterable<br/>
* # Endpoint: <br/>
* /terms/tosformList<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardTerms.tosformList(http_request_params)
 ```
* @param {string} qfilter <pre>{"default": null, "comment": "Filter tosform description"}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Start responses at page x limit (ie, page number)"}</pre>
* @param {number} limit <pre>{"default": 20, "comment": "Limit number of responses"}</pre>
* @param {string} sortby <pre>{"default": "created", "comment": "Column to sort results on"}</pre>
* @param {string} sortorder <pre>{"default": "desc", "comment": "Sort order, asc or desc"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
tosformList: function(http_request_params){
    return picard.get("/terms/tosformList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardTerms#tosformCreate
* @methodOf picard.service.picardTerms
*
* @description
* Add tosform<br/>
* # Endpoint: <br/>
* /terms/tosform<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardTerms.tosformCreate(http_request_params)
 ```
* @param {string} url <pre>{"comment": "Tosform url to add"}</pre>
* @param {Boolean} s3creds <pre>{"default": false, "comment": "Boolean indicating if response should include federatedtokens for accessing terms of service object in s3."}</pre>
* @param {string} description <pre>{"comment": "Description of form to add"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
*/
tosformCreate: function(http_request_params){
    return picard.post("/terms/tosform", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardTerms#termsformGet
* @methodOf picard.service.picardTerms
*
* @description
* Get newest tosform<br/>
* # Endpoint: <br/>
* /terms/tosform<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardTerms.termsformGet(http_request_params)
 ```
* @param {Boolean} s3creds <pre>{"default": false, "comment": "Boolean indicating if response should include federatedtokens for accessing terms of service object in s3."}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
*/
termsformGet: function(http_request_params){
    return picard.get("/terms/tosform", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardTerms#tosformDelete
* @methodOf picard.service.picardTerms
*
* @description
* Delete a Tosform by id<br/>
* # Endpoint: <br/>
* /terms/tosform<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardTerms.tosformDelete(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Tosform id to delete"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
*/
tosformDelete: function(http_request_params){
    return picard.delete("/terms/tosform", http_request_params)
},
  }
}])
