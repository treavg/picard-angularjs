/*!
 * See LICENSE in this repository for license information
 */
(function(){
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
                // get the stack id using the picard module
                picard.get("/admin/stackId",{}).then(function(res){
                    $scope.stack = res;
                })
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

angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardAdmin
* @module picard
* @description 
*/
.factory("Admin", ["$q", "$http", "picard", function ($q, $http, picard) {
  return {


/**
* @ngdoc function
* @name picard.service.picardAdmin#stackGetid
* @methodOf picard.service.picardAdmin
*
* @description
* Gets STACK_ID and other code info from config<br/>
* # Endpoint: <br/>
* /admin/stackId<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAdmin.stackGetid(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
stackGetid: function(http_request_params){
    return picard.get("/admin/stackId", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#apitestRun
* @methodOf picard.service.picardAdmin
*
* @description
* Runs apitest using local session and internal test client<br/>
* # Endpoint: <br/>
* /admin/apitestRun<br/>
* # Permissions
# Usage
 ```js
 picardAdmin.apitestRun(http_request_params)
 ```
* @param {string} params <pre>{"comment": "Params to call endpoint with", "required": true}</pre>
* @param {string} endpoint <pre>{"default": null, "comment": "Endpoint to test on, in /module/endpoint format"}</pre>
* @param {string} method <pre>{"default": "get", "comment": "Method to call endpoint with"}</pre>
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to run endpoint as, admin only"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
apitestRun: function(http_request_params){
    return picard.post("/admin/apitestRun", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#templateFunctest
* @methodOf picard.service.picardAdmin
*
* @description
* Tests rendering, using default generic mail template.<br/>
* # Endpoint: <br/>
* /admin/templateTest<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.templateFunctest(http_request_params)
 ```
* @param {string} category <pre>{"comment": "Template category", "required": true}</pre>
* @param {string} name <pre>{"comment": "Name of template to render", "required": true}</pre>
* @param {string} mimetype <pre>{"default": "text", "comment": "Mimetype of template to render"}</pre>
* @param {Object} jvars <pre>{"default": {}, "comment": "Dictionary of key value pairs to interpolate"}</pre>
* @param {Boolean} mail <pre>{"default": false, "comment": "If True then email is sent to calling users email address."}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
templateFunctest: function(http_request_params){
    return picard.get("/admin/templateTest", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#configFlist
* @methodOf picard.service.picardAdmin
*
* @description
* Admin Endpoint: Gets list of configs in set, filterable<br/>
* # Endpoint: <br/>
* /admin/configList<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.configFlist(http_request_params)
 ```
* @param {string} qfilter <pre>{"default": null, "comment": "Filter user list by start of name", "setdefault": true}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Start responses at page x limit (ie, page number)", "setdefault": true}</pre>
* @param {number} limit <pre>{"default": 20, "comment": "Limit number of responses", "setdefault": true}</pre>
* @param {string} sortby <pre>{"default": "key", "comment": "Column to sort results on", "setdefault": true, "in": ["key", "description"]}</pre>
* @param {string} sortorder <pre>{"default": "asc", "comment": "Sort order, asc or desc", "setdefault": true}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
configFlist: function(http_request_params){
    return picard.get("/admin/configList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#dblogEsquery
* @methodOf picard.service.picardAdmin
*
* @description
* Queries log entries via Elastic Search query DSL from the database log, filterable<br/>
* # Endpoint: <br/>
* /admin/dblogQuery<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.dblogEsquery(http_request_params)
 ```
* @param {Object} qfilter <pre>{"comment": "Elasticsearch DSL formatted query filter for list", "required": true}</pre>
* @param {Array} sort <pre>{"default": ["timestamp:desc"], "comment": "A comma-separated list of <field>:<direction> pairs.  Direction is one of asc or desc.", "setdefault": true}</pre>
* @param {Array} _source_exclude <pre>{"default": null, "comment": "Fields to exclude from the response.", "setdefault": true}</pre>
* @param {Array} _source_include <pre>{"default": null, "comment": "Fields to include in the response.", "setdefault": true}</pre>
* @param {number} from_ <pre>{"default": 0, "comment": "Starting offset.  Used for pagination.", "setdefault": true}</pre>
* @param {number} size <pre>{"default": 10, "comment": "Maximum Number of hits to return."}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
dblogEsquery: function(http_request_params){
    return picard.get("/admin/dblogQuery", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#templateCatlist
* @methodOf picard.service.picardAdmin
*
* @description
* Generates list of available template categories, for preopulating dropdowns in template page<br/>
* # Endpoint: <br/>
* /admin/templateCatList<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.templateCatlist(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
templateCatlist: function(http_request_params){
    return picard.get("/admin/templateCatList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#configPubliclist
* @methodOf picard.service.picardAdmin
*
* @description
* Admin Endpoint: Gets list of configs that can be viewed by public.<br/>
* # Endpoint: <br/>
* /admin/publicConfigList<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAdmin.configPubliclist(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
configPubliclist: function(http_request_params){
    return picard.get("/admin/publicConfigList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#controlpanelList
* @methodOf picard.service.picardAdmin
*
* @description
* Generates list of admin control panels and their frontend assets for dynamic assembly<br/>
* # Endpoint: <br/>
* /admin/controlPanelList<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.controlpanelList(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
controlpanelList: function(http_request_params){
    return picard.get("/admin/controlPanelList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#dblogEventget
* @methodOf picard.service.picardAdmin
*
* @description
* Provides a single dblog event by id<br/>
* # Endpoint: <br/>
* /admin/dblogEvent<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.dblogEventget(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Dblog event id", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
dblogEventget: function(http_request_params){
    return picard.get("/admin/dblogEvent", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#dblogEventdelete
* @methodOf picard.service.picardAdmin
*
* @description
*
* # Endpoint: <br/>
* /admin/dblogEvent<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.dblogEventdelete(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Dblog event id to delete", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete specified dbconfig
*/
dblogEventdelete: function(http_request_params){
    return picard.delete("/admin/dblogEvent", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#templateList
* @methodOf picard.service.picardAdmin
*
* @description
* Generates list of available templates, filterable<br/>
* # Endpoint: <br/>
* /admin/templateList<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.templateList(http_request_params)
 ```
* @param {string} category <pre>{"default": null, "comment": "Template Category"}</pre>
* @param {string} qfilter <pre>{"default": null, "comment": "Query filter for list"}</pre>
* @param {number} limit <pre>{"default": 10, "comment": "Limit list to x results starting at page"}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Page to start on (limit * page is first page returned)"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
templateList: function(http_request_params){
    return picard.get("/admin/templateList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#dblogList
* @methodOf picard.service.picardAdmin
*
* @description
* Queries log entries from the dblog, filterable<br/>
* # Endpoint: <br/>
* /admin/dblogList<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.dblogList(http_request_params)
 ```
* @param {string} qfilter <pre>{"default": null, "comment": "Query filter for list, searches against message"}</pre>
* @param {number} limit <pre>{"default": 20, "comment": "Limit list to x results starting at page"}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Page to start on (limit * page is first page returned)"}</pre>
* @param {Boolean} system <pre>{"default": false, "comment": "Show system log entries, including dblogList endpoint and static files"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
dblogList: function(http_request_params){
    return picard.get("/admin/dblogList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#templateUpdate
* @methodOf picard.service.picardAdmin
*
* @description
* Updates existing template<br/>
* # Endpoint: <br/>
* /admin/template<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.templateUpdate(http_request_params)
 ```
* @param {string} category <pre>{"matches": "^[A-Za-z0-9_]+$", "comment": "Category to add template to", "required": true}</pre>
* @param {string} name <pre>{"matches": "^[A-Za-z0-9_]+$", "comment": "Template Name", "required": true}</pre>
* @param {string} description <pre>{"default": "", "comment": "Template description, optional note"}</pre>
* @param {string} htmlbody <pre>{"default": "", "comment": "HTML template Body"}</pre>
* @param {string} txtsubject <pre>{"default": "", "comment": "HTML Template Subject"}</pre>
* @param {string} txtbody <pre>{"default": "", "comment": "Text Template Body"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError unable to update specified template
*/
templateUpdate: function(http_request_params){
    return picard.put("/admin/template", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#templateCreate
* @methodOf picard.service.picardAdmin
*
* @description
* Creates new template<br/>
* # Endpoint: <br/>
* /admin/template<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.templateCreate(http_request_params)
 ```
* @param {string} category <pre>{"comment": "Category to add template to", "required": true}</pre>
* @param {string} name <pre>{"comment": "Template Name", "required": true}</pre>
* @param {string} description <pre>{"default": "", "comment": "Template description, optional note"}</pre>
* @param {string} htmlbody <pre>{"default": "", "comment": "HTML Template Body"}</pre>
* @param {string} txtsubject <pre>{"default": "", "comment": "HTML Template Subject"}</pre>
* @param {string} txtbody <pre>{"default": "", "comment": "Text Template Body"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError unable to create specified template
*/
templateCreate: function(http_request_params){
    return picard.post("/admin/template", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#templateGet
* @methodOf picard.service.picardAdmin
*
* @description
* Provides single templates from database<br/>
* # Endpoint: <br/>
* /admin/template<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.templateGet(http_request_params)
 ```
* @param {string} category <pre>{"comment": "Template Category", "required": true}</pre>
* @param {string} name <pre>{"comment": "Template Name", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
templateGet: function(http_request_params){
    return picard.get("/admin/template", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#templatesDelete
* @methodOf picard.service.picardAdmin
*
* @description
* Deletes existing template<br/>
* # Endpoint: <br/>
* /admin/template<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.templatesDelete(http_request_params)
 ```
* @param {string} category <pre>{"comment": "Category to del template from", "required": true}</pre>
* @param {string} name <pre>{"comment": "Template Name", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError unable to delete specified template
*/
templatesDelete: function(http_request_params){
    return picard.delete("/admin/template", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#cacheFunctest
* @methodOf picard.service.picardAdmin
*
* @description
* Tests rendering, using default generic mail template.<br/>
* # Endpoint: <br/>
* /admin/cacheTest<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.cacheFunctest(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
cacheFunctest: function(http_request_params){
    return picard.get("/admin/cacheTest", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#configUpdate
* @methodOf picard.service.picardAdmin
*
* @description
* Updates existing app config<br/>
* # Endpoint: <br/>
* /admin/config<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.configUpdate(http_request_params)
 ```
* @param {string} value <pre>{"comment": "Config value", "minlength": 1, "required": true}</pre>
* @param {string} key <pre>{"comment": "Config key", "required": true}</pre>
* @param {string} description <pre>{"default": null, "comment": "Config description, optional note"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError unable to update specified config
*/
configUpdate: function(http_request_params){
    return picard.put("/admin/config", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#configRetrieve
* @methodOf picard.service.picardAdmin
*
* @description
* Provides an app config for key specified<br/>
* # Endpoint: <br/>
* /admin/config<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardAdmin.configRetrieve(http_request_params)
 ```
* @param {string} key <pre>{"comment": "Key of config to retrieve", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
configRetrieve: function(http_request_params){
    return picard.get("/admin/config", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAdmin#siteMap
* @methodOf picard.service.picardAdmin
*
* @description
* Generates sitemap of routes available, including parameters checks and docs<br/>
* # Endpoint: <br/>
* /admin/sitemap<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAdmin.siteMap(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
siteMap: function(http_request_params){
    return picard.get("/admin/sitemap", http_request_params)
},
  }
}])

angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardAuth
* @module picard
* @description 
*/
.factory("Auth", ["$q", "$http", "picard", function ($q, $http, picard) {
  return {


/**
* @ngdoc function
* @name picard.service.picardAuth#regAuthcheckdectest
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, tests that logged in user can pass registered auth checks<br/>
* # Endpoint: <br/>
* /auth/regAuthChecksTest<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.regAuthcheckdectest(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
regAuthcheckdectest: function(http_request_params){
    return picard.get("/auth/regAuthChecksTest", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthRevoke
* @methodOf picard.service.picardAuth
*
* @description
* Revokes access to oauth provider.<br/>
* # Endpoint: <br/>
* /auth/oauthRevoke/<provider><br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.oauthRevoke(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
oauthRevoke: function(http_request_params){
    return picard.post("/auth/oauthRevoke/<provider>", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthproviderList
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, gets list of oauthproviders, filterable<br/>
* # Endpoint: <br/>
* /auth/oauthproviderList<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.oauthproviderList(http_request_params)
 ```
* @param {string} qfilter <pre>{"default": null, "comment": "Filter user list by start of name"}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Start responses at page x limit (ie, page number)"}</pre>
* @param {number} limit <pre>{"default": 20, "comment": "Limit number of responses"}</pre>
* @param {string} sortby <pre>{"default": "created", "comment": "Column to sort results on", "in": ["name", "client_id", "client_secret", "extras"]}</pre>
* @param {string} sortorder <pre>{"default": "asc", "comment": "Sort order, asc or desc"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
oauthproviderList: function(http_request_params){
    return picard.get("/auth/oauthproviderList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#roleuserCreate
* @methodOf picard.service.picardAuth
*
* @description
* Add a user to a role, by uuid<br/>
* # Endpoint: <br/>
* /auth/roleUser<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.roleuserCreate(http_request_params)
 ```
* @param {string} user_id <pre>{"comment": "User uuid to add to role", "required": true}</pre>
* @param {string} role_id <pre>{"comment": "Role id to add user to", "oneof": ["role_id", "role_name"]}</pre>
* @param {string} role_name <pre>{"comment": "Role name to add user to"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to add user from role
*/
roleuserCreate: function(http_request_params){
    return picard.post("/auth/roleUser", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#roleuserDelete
* @methodOf picard.service.picardAuth
*
* @description
* Remove user from a role, by uuid<br/>
* # Endpoint: <br/>
* /auth/roleUser<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.roleuserDelete(http_request_params)
 ```
* @param {string} user_id <pre>{"comment": "User uuid to remove from role", "required": true}</pre>
* @param {string} role_id <pre>{"comment": "Role id to remove user from", "oneof": ["role_id", "role_name"]}</pre>
* @param {string} role_name <pre>{"comment": "Role name to remove user from"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to remove user from role
*/
roleuserDelete: function(http_request_params){
    return picard.delete("/auth/roleUser", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#emailprefUpdate
* @methodOf picard.service.picardAuth
*
* @description
* Add a new user email preferences, or update existing prefs<br/>
* # Endpoint: <br/>
* /auth/emailpref<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.emailprefUpdate(http_request_params)
 ```
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to add email prefs for"}</pre>
* @param {(Boolean|number)=} email_optout <pre>{"default": false, "comment": "Flag for indicating user wants to opt out of emails"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
* @raises {401} PermissionDenied Non-admin user tries to alter email pref of other user
*/
emailprefUpdate: function(http_request_params){
    return picard.post("/auth/emailpref", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#emailprefGet
* @methodOf picard.service.picardAuth
*
* @description
* Get a Users email preferences by id.<br/>
* # Endpoint: <br/>
* /auth/emailpref<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.emailprefGet(http_request_params)
 ```
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to get email prefs for"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
* @raises {401} PermissionDenied Non-admin user tries to get email pref of other user.
*/
emailprefGet: function(http_request_params){
    return picard.get("/auth/emailpref", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthAuthorize
* @methodOf picard.service.picardAuth
*
* @description
* Logs user in via oauth provider, returns redirect to verification link<br/>
* # Endpoint: <br/>
* /auth/oauthAuthorize/<provider><br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.oauthAuthorize(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
oauthAuthorize: function(http_request_params){
    return picard.get("/auth/oauthAuthorize/<provider>", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#userList
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, gets list of users in group users, filterable<br/>
* # Endpoint: <br/>
* /auth/userList<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.userList(http_request_params)
 ```
* @param {string} qfilter <pre>{"default": null, "comment": "Filter user list by start of name"}</pre>
* @param {string} role <pre>{"default": null, "comment": "Role to filter based on user membership", "setdefault": true}</pre>
* @param {string} sortorder <pre>{"default": "asc", "comment": "Sort order, asc or desc", "setdefault": true}</pre>
* @param {number} limit <pre>{"default": 20, "comment": "Limit number of responses", "setdefault": true}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Start responses at page x limit (ie, page number)", "setdefault": true}</pre>
* @param {string} sortby <pre>{"default": "created", "comment": "Column to sort results on", "setdefault": true}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
userList: function(http_request_params){
    return picard.get("/auth/userList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#emailvalidationList
* @methodOf picard.service.picardAuth
*
* @description
* Generates list of available email validation tokens, filterable.<br/>
* # Endpoint: <br/>
* /auth/emailvalidationList<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.emailvalidationList(http_request_params)
 ```
* @param {string} qfilter <pre>{"default": null, "comment": "Query filter for list"}</pre>
* @param {number} limit <pre>{"default": 10, "comment": "Limit list to x results starting at page"}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Page to start on (limit * page is first page returned)"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
emailvalidationList: function(http_request_params){
    return picard.get("/auth/emailvalidationList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#getOauthuseraccount
* @methodOf picard.service.picardAuth
*
* @description
* Gets user account.<br/>
* # Endpoint: <br/>
* /auth/oauthUser<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.getOauthuseraccount(http_request_params)
 ```
* @param {string} provider_name <pre>{"comment": "Name of provider to create", "minlength": 1, "maxlength": 64}</pre>
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to get.  Non-admin users can only access their own objects."}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to get account.
*/
getOauthuseraccount: function(http_request_params){
    return picard.get("/auth/oauthUser", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#usergroupUpdate
* @methodOf picard.service.picardAuth
*
* @description
* Modify a usergroup by id or name<br/>
* # Endpoint: <br/>
* /auth/usergroup<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.usergroupUpdate(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Usergroup id to modify", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"comment": "Usergroup name to modify"}</pre>
* @param {string} description <pre>{"default": null, "comment": "Description of usergroup", "maxlength": 255}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to modify Role
*/
usergroupUpdate: function(http_request_params){
    return picard.put("/auth/usergroup", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#usergroupCreate
* @methodOf picard.service.picardAuth
*
* @description
* Adds new usergroup<br/>
* # Endpoint: <br/>
* /auth/usergroup<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.usergroupCreate(http_request_params)
 ```
* @param {string} name <pre>{"comment": "Usergroup name to create", "minlength": 1, "required": true, "maxlength": 64}</pre>
* @param {string} description <pre>{"default": "", "comment": "Description of usergroup", "maxlength": 255}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create Usergroup
*/
usergroupCreate: function(http_request_params){
    return picard.post("/auth/usergroup", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#usergroupGet
* @methodOf picard.service.picardAuth
*
* @description
* Get usergroup by id or name<br/>
* # Endpoint: <br/>
* /auth/usergroup<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.usergroupGet(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Usergroup id to retrieve", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"comment": "Usergroup name to retrieve"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
usergroupGet: function(http_request_params){
    return picard.get("/auth/usergroup", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#usergroupDelete
* @methodOf picard.service.picardAuth
*
* @description
* Delete a usergroup by uuid<br/>
* # Endpoint: <br/>
* /auth/usergroup<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.usergroupDelete(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Usergroup id to delete", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"comment": "Usergroup name to delete"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete Usergroup
*/
usergroupDelete: function(http_request_params){
    return picard.delete("/auth/usergroup", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthproviderUserlist
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, gets list of oauthproviders that are configured for user use, filterable<br/>
* # Endpoint: <br/>
* /auth/oauthproviderUserlist<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.oauthproviderUserlist(http_request_params)
 ```
* @param {string} qfilter <pre>{"default": null, "comment": "Filter oauth user list by start of provider name"}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Start responses at page x limit (ie, page number)"}</pre>
* @param {number} limit <pre>{"default": 20, "comment": "Limit number of responses"}</pre>
* @param {string} sortby <pre>{"default": "created", "comment": "Column to sort results on", "in": ["name", "client_id", "client_secret", "extras"]}</pre>
* @param {string} sortorder <pre>{"default": "asc", "comment": "Sort order, asc or desc"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
oauthproviderUserlist: function(http_request_params){
    return picard.get("/auth/oauthproviderUserlist", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#passwordUpdate
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, change user password<br/>
* # Endpoint: <br/>
* /auth/passwordUpdate<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.passwordUpdate(http_request_params)
 ```
* @param {string} newpassword <pre>{"comment": "New password.  Minimum length requirement can be specified through the PASSWORD_MIN_LENGTH global app config.  Default is 6.", "required": true}</pre>
* @param {string} oldpassword <pre>{"comment": "Oldpassword"}</pre>
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to change"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
passwordUpdate: function(http_request_params){
    return picard.post("/auth/passwordUpdate", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#apikeyUserlist
* @methodOf picard.service.picardAuth
*
* @description
* Lists users with apikeys for running api tests<br/>
* # Endpoint: <br/>
* /auth/apikeyList<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.apikeyUserlist(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
apikeyUserlist: function(http_request_params){
    return picard.get("/auth/apikeyList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthproviderUpdate
* @methodOf picard.service.picardAuth
*
* @description
* Modify a oauthprovider by uuid<br/>
* # Endpoint: <br/>
* /auth/oauthprovider<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.oauthproviderUpdate(http_request_params)
 ```
* @param {string} id <pre>{"comment": "UUID of Oauthprovider", "required": true}</pre>
* @param {string} client_secret <pre>{"default": null, "comment": "Client secret of oauthprovider", "maxlength": 255}</pre>
* @param {Object} extras <pre>{"default": {}, "comment": "Extra credentials for oauthprovider in json"}</pre>
* @param {string} client_id <pre>{"default": null, "comment": "Client id of oauthprovider", "maxlength": 255}</pre>
* @param {string} name <pre>{"default": null, "comment": "Name of oauthprovider", "maxlength": 255}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to modify Oauthprovider
*/
oauthproviderUpdate: function(http_request_params){
    return picard.put("/auth/oauthprovider", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthproviderCreate
* @methodOf picard.service.picardAuth
*
* @description
* Adds new oauthprovider<br/>
* # Endpoint: <br/>
* /auth/oauthprovider<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.oauthproviderCreate(http_request_params)
 ```
* @param {string} client_secret <pre>{"comment": "Client secret for oauthprovider.", "required": true, "maxlength": 255}</pre>
* @param {string} name <pre>{"comment": "Namstarte of provider to create.", "minlength": 1, "required": true, "maxlength": 64}</pre>
* @param {string} client_id <pre>{"comment": "Client id for oauthprovider.", "required": true, "maxlength": 255}</pre>
* @param {Object} extras <pre>{"default": {}, "comment": "Extra credentials for oauthprovider in json."}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create Oauthprovider
*/
oauthproviderCreate: function(http_request_params){
    return picard.post("/auth/oauthprovider", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthproviderGet
* @methodOf picard.service.picardAuth
*
* @description
* Get oauthprovider by oauthprovider uuid<br/>
* # Endpoint: <br/>
* /auth/oauthprovider<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.oauthproviderGet(http_request_params)
 ```
* @param {string} name <pre>{"comment": "Oauthprovider name to retrieve."}</pre>
* @param {string} id <pre>{"comment": "Oauthprovider uuid to retrieve.", "oneof": ["name", "id"]}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
oauthproviderGet: function(http_request_params){
    return picard.get("/auth/oauthprovider", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthproviderDelete
* @methodOf picard.service.picardAuth
*
* @description
* Delete a oauthprovider by uuid<br/>
* # Endpoint: <br/>
* /auth/oauthprovider<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.oauthproviderDelete(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Oauthprovider uuid to delete", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete Oauthprovider
*/
oauthproviderDelete: function(http_request_params){
    return picard.delete("/auth/oauthprovider", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#roleList
* @methodOf picard.service.picardAuth
*
* @description
* Gets list of roles<br/>
* # Endpoint: <br/>
* /auth/roleList<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.roleList(http_request_params)
 ```
* @param {string} qfilter <pre>{"default": null, "comment": "Filter role list by name or description", "setdefault": true}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Start responses at page x limit (ie, page number)", "setdefault": true}</pre>
* @param {number} limit <pre>{"default": 10, "comment": "Limit number of responses", "setdefault": true}</pre>
* @param {string} sortby <pre>{"default": "name", "comment": "Column to sort results on", "setdefault": true, "in": ["name", "description"]}</pre>
* @param {string} sortorder <pre>{"default": "asc", "comment": "Sort order, asc or desc", "setdefault": true, "in": ["asc", "desc"]}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
roleList: function(http_request_params){
    return picard.get("/auth/roleList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#pgpkeyCreate
* @methodOf picard.service.picardAuth
*
* @description
* Add or update pgpkey on a user<br/>
* # Endpoint: <br/>
* /auth/pgpkey<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.pgpkeyCreate(http_request_params)
 ```
* @param {string} pgpkey <pre>{"comment": "Ascii armored pgp key to add, requires proper formatting to be maintained, per https://www.gnupg.org/gph/en/manual/x56.html.", "minlength": 1, "required": true}</pre>
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to add pgpkey to"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
* @raises {401} PermissionDenied non-admin user tries to add/update pgpkey on other user
*/
pgpkeyCreate: function(http_request_params){
    return picard.post("/auth/pgpkey", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#pgpkeyGet
* @methodOf picard.service.picardAuth
*
* @description
* Get a users pgpkey by uuid<br/>
* # Endpoint: <br/>
* /auth/pgpkey<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.pgpkeyGet(http_request_params)
 ```
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to get pgpkey for"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
*/
pgpkeyGet: function(http_request_params){
    return picard.get("/auth/pgpkey", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#pgpkeyDelete
* @methodOf picard.service.picardAuth
*
* @description
* Delete a users pgpkey by id<br/>
* # Endpoint: <br/>
* /auth/pgpkey<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.pgpkeyDelete(http_request_params)
 ```
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to delete pgpkey from"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
* @raises {401} PermissionDenied Non-admin user tries to delete pgpkey of other user
*/
pgpkeyDelete: function(http_request_params){
    return picard.delete("/auth/pgpkey", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#roleUpdate
* @methodOf picard.service.picardAuth
*
* @description
* Modify a role by uuid<br/>
* # Endpoint: <br/>
* /auth/role<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.roleUpdate(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Role id to modify", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"comment": "Role name to update"}</pre>
* @param {string} description <pre>{"default": "", "comment": "Description of role", "required": true, "maxlength": 255}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to modify Role
*/
roleUpdate: function(http_request_params){
    return picard.put("/auth/role", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#roleCreate
* @methodOf picard.service.picardAuth
*
* @description
* Adds new role<br/>
* # Endpoint: <br/>
* /auth/role<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.roleCreate(http_request_params)
 ```
* @param {string} name <pre>{"comment": "Role name to create", "minlength": 1, "required": true, "maxlength": 64}</pre>
* @param {string} description <pre>{"default": "", "comment": "Description of role", "maxlength": 255}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create Role
*/
roleCreate: function(http_request_params){
    return picard.post("/auth/role", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#roleGet
* @methodOf picard.service.picardAuth
*
* @description
* Get role by role uuid or name.  Optionally can return user auth models for users in the desired role.<br/>
* # Endpoint: <br/>
* /auth/role<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.roleGet(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Role id to retrieve", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"comment": "Role name to retrieve"}</pre>
* @param {Boolean} full <pre>{"default": true, "comment": "flag to determine if list of users in role should be returned.  Defaults to true."}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
roleGet: function(http_request_params){
    return picard.get("/auth/role", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#roleDelete
* @methodOf picard.service.picardAuth
*
* @description
* Delete a role by uuid<br/>
* # Endpoint: <br/>
* /auth/role<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.roleDelete(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Role id to delete", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"comment": "Role name to delete"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete Role
*/
roleDelete: function(http_request_params){
    return picard.delete("/auth/role", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#userPasswordchangeset
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, set users flag to require password change on next api call<br/>
* # Endpoint: <br/>
* /auth/userPasswordChangeSet<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.userPasswordchangeset(http_request_params)
 ```
* @param {(Boolean|number)=} password_change_nextlogin <pre>{"comment": "Flag if user needs to change password on next login", "required": true}</pre>
* @param {string} id <pre>{"comment": "User uuid to change", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
userPasswordchangeset: function(http_request_params){
    return picard.post("/auth/userPasswordChangeSet", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#usergroupmemberCreate
* @methodOf picard.service.picardAuth
*
* @description
* Adds member to usergroup<br/>
* # Endpoint: <br/>
* /auth/usergroupMember<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.usergroupmemberCreate(http_request_params)
 ```
* @param {string} member <pre>{"comment": "Member id to add", "required": true}</pre>
* @param {string} id <pre>{"comment": "Usergroup id to add member to", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"comment": "Usergroup name to add member to"}</pre>
* @param {string} owner <pre>{"comment": "Owner id, optional, for admin user only"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to add member to usergroup
* @raises {401} PermissionDenied Non-admin user attempts to add user to other useres usergroup
*/
usergroupmemberCreate: function(http_request_params){
    return picard.post("/auth/usergroupMember", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#usergroupmemberGet
* @methodOf picard.service.picardAuth
*
* @description
* Gets a list of members in a usergroup for owner<br/>
* # Endpoint: <br/>
* /auth/usergroupMember<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.usergroupmemberGet(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Usergroup id to add member to", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"comment": "Usergroup name to add member to"}</pre>
* @param {string} owner <pre>{"comment": "Usergroup owner id (optional, assume calling user)"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
usergroupmemberGet: function(http_request_params){
    return picard.get("/auth/usergroupMember", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#usergroupmemberDelete
* @methodOf picard.service.picardAuth
*
* @description
* Deletes a member from usergroup by id<br/>
* # Endpoint: <br/>
* /auth/usergroupMember<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.usergroupmemberDelete(http_request_params)
 ```
* @param {string} member <pre>{"comment": "Usergroup member to delete by id", "required": true}</pre>
* @param {string} id <pre>{"comment": "Usergroup id to delete", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"comment": "Usergroup name to delete"}</pre>
* @param {string} owner <pre>{"comment": "Usergroup owner (optional)"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete member from Usergroup
*/
usergroupmemberDelete: function(http_request_params){
    return picard.delete("/auth/usergroupMember", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthproviderListunconfigured
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, gets list of unconfigured oauth providers<br/>
* # Endpoint: <br/>
* /auth/oauthproviderListunconfigured<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.oauthproviderListunconfigured(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
oauthproviderListunconfigured: function(http_request_params){
    return picard.get("/auth/oauthproviderListunconfigured", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#emailvalidationReset
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, reset email validation setting for user, forcing reconfirmation<br/>
* # Endpoint: <br/>
* /auth/emailValidationReset<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.emailvalidationReset(http_request_params)
 ```
* @param {(Boolean|number)=} email_validation_reset <pre>{"comment": "Flag if user needs to validate email", "required": true}</pre>
* @param {string} id <pre>{"comment": "User uuid to change", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
emailvalidationReset: function(http_request_params){
    return picard.post("/auth/emailValidationReset", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#passwordresetCreate
* @methodOf picard.service.picardAuth
*
* @description
* Create a new user password reset token and email.  This overwrites any existing tokens for this user.<br/>
* # Endpoint: <br/>
* /auth/passwordReset<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.passwordresetCreate(http_request_params)
 ```
* @param {string} email <pre>{"comment": "User email to create password reset for", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create passwordreset
*/
passwordresetCreate: function(http_request_params){
    return picard.post("/auth/passwordReset", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#passwordresetDelete
* @methodOf picard.service.picardAuth
*
* @description
* Delete a user password reset token by token<br/>
* # Endpoint: <br/>
* /auth/passwordReset<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.passwordresetDelete(http_request_params)
 ```
* @param {string} token <pre>{"comment": "Password token uuid to delete", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete password reset token
*/
passwordresetDelete: function(http_request_params){
    return picard.delete("/auth/passwordReset", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#passwordUpdatebytoken
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, resets password by reset token. Used for forgot-my-password functionality.<br/>
* # Endpoint: <br/>
* /auth/passwordUpdatebyToken<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.passwordUpdatebytoken(http_request_params)
 ```
* @param {string} password <pre>{"comment": "New password, must be at least app.config[\"PASSWORD_MIN_LENGTH\"] characters in length", "required": true}</pre>
* @param {string} token <pre>{"comment": "Password reset token"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
passwordUpdatebytoken: function(http_request_params){
    return picard.post("/auth/passwordUpdatebyToken", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#logout
* @methodOf picard.service.picardAuth
*
* @description
* Logs user out, invalidating local session<br/>
* # Endpoint: <br/>
* /auth/logout<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.logout(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
logout: function(http_request_params){
    return picard.post("/auth/logout", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#userUpdate
* @methodOf picard.service.picardAuth
*
* @description
* Updates an existing users email address, by uuid.<br/>
* # Endpoint: <br/>
* /auth/user<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.userUpdate(http_request_params)
 ```
* @param {string} id <pre>{"comment": "User ID of user to update", "required": true}</pre>
* @param {string} email <pre>{"default": null, "comment": "User email to update"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
* @raises {401} PermissionDenied Non-admin user attempts to update user other than caller
* @raises {409} DocumentConflict User attempts to update email to an existing email address
* @raises {500} DBError User attempts to perform invalid database operation
*/
userUpdate: function(http_request_params){
    return picard.put("/auth/user", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#userCreate
* @methodOf picard.service.picardAuth
*
* @description
* Creates a user. If config USER_CREATION_METHOD is set to "user", users are able to self register. If set to admin, only admins can create accounts.<br/>
* # Endpoint: <br/>
* /auth/user<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.userCreate(http_request_params)
 ```
* @param {string} password <pre>{"comment": "Cleartext password of user.", "minlength": 1, "oneof": ["password", "random_password"], "maxlength": 64}</pre>
* @param {(Boolean|number)=} random_password <pre>{"default": false, "comment": "Generate random password and send to user in welcome email.  Requires USER_CREATION_METHOD be set to admin."}</pre>
* @param {string} email <pre>{"comment": "New user email address.", "minlength": 7, "required": true, "maxlength": 64}</pre>
* @param {string} name <pre>{"comment": "Username for new user.  This cannot be changed.", "minlength": 4, "required": true, "maxlength": 64}</pre>
* @param {(Boolean|number)=} send_welcome <pre>{"default": true, "comment": "Flag to send welcome email with username to user. Always true if random password is generated."}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create user
*/
userCreate: function(http_request_params){
    return picard.post("/auth/user", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#userGet
* @methodOf picard.service.picardAuth
*
* @description
* Gets a users object by uuid.  Users not in the admin group will get permission denied errors if they try to access a different users uuid.<br/>
* # Endpoint: <br/>
* /auth/user<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.userGet(http_request_params)
 ```
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to get.  Non-admin users can only access their own objects.", "setdefault": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError User not found
* @raises {401} PermissionDenied Non-admin user attempts to identify user other than themselves
*/
userGet: function(http_request_params){
    return picard.get("/auth/user", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#userDelete
* @methodOf picard.service.picardAuth
*
* @description
* Deletes a user account<br/>
* # Endpoint: <br/>
* /auth/user<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.userDelete(http_request_params)
 ```
* @param {string} id <pre>{"comment": "User uuid of user to delete", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete user
* @raises {401} PermissionDenied Non-admin user attempts to update user other than caller
*/
userDelete: function(http_request_params){
    return picard.delete("/auth/user", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#emailvalidationGet
* @methodOf picard.service.picardAuth
*
* @description
* Confirm email validation, confirming pair of email and token<br/>
* # Endpoint: <br/>
* /auth/emailValidation<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.emailvalidationGet(http_request_params)
 ```
* @param {string} token <pre>{"comment": "Token to validate", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {404} DocumentNotFOund Invalid email and token combo
*/
emailvalidationGet: function(http_request_params){
    return picard.put("/auth/emailValidation", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#emailvalidationCreate
* @methodOf picard.service.picardAuth
*
* @description
* Create and send an email validation<br/>
* # Endpoint: <br/>
* /auth/emailValidation<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.emailvalidationCreate(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create email validation
*/
emailvalidationCreate: function(http_request_params){
    return picard.post("/auth/emailValidation", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#emailvalidationDelete
* @methodOf picard.service.picardAuth
*
* @description
* Delete a email validation token<br/>
* # Endpoint: <br/>
* /auth/emailValidation<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.emailvalidationDelete(http_request_params)
 ```
* @param {string} token <pre>{"comment": "Token to delete", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete email validation token
*/
emailvalidationDelete: function(http_request_params){
    return picard.delete("/auth/emailValidation", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#userIdentitytest
* @methodOf picard.service.picardAuth
*
* @description
* Gets user identity info of calling user for testing.<br/>
* # Endpoint: <br/>
* /auth/userIdentityTest<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.userIdentitytest(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError specified user not found
*/
userIdentitytest: function(http_request_params){
    return picard.get("/auth/userIdentityTest", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#apikeyCreate
* @methodOf picard.service.picardAuth
*
* @description
* Create a new user apikey, or regenerate existing key<br/>
* # Endpoint: <br/>
* /auth/apikey<br/>
* # Permissions
* *fresh session<br/>
# Usage
 ```js
 picardAuth.apikeyCreate(http_request_params)
 ```
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to add apikey to"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create apikey
* @raises {401} PermissionDenied User is not admin and attemps to get user other than themselves
*/
apikeyCreate: function(http_request_params){
    return picard.post("/auth/apikey", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#apikeyGet
* @methodOf picard.service.picardAuth
*
* @description
* Get a Users apikey by uuid<br/>
* # Endpoint: <br/>
* /auth/apikey<br/>
* # Permissions
* *fresh session<br/>
# Usage
 ```js
 picardAuth.apikeyGet(http_request_params)
 ```
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to get apikey for"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Api key not found
* @raises {401} PermissionDenied User is not admin and attemps to get user other than themselves
*/
apikeyGet: function(http_request_params){
    return picard.get("/auth/apikey", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#apikeyDelete
* @methodOf picard.service.picardAuth
*
* @description
* Delete a User apikey by user uuid<br/>
* # Endpoint: <br/>
* /auth/apikey<br/>
* # Permissions
* *fresh session<br/>
# Usage
 ```js
 picardAuth.apikeyDelete(http_request_params)
 ```
* @param {string} id <pre>{"default": "<current_user>", "comment": "User uuid to delete apikey for"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete apikey
* @raises {401} PermissionDenied User is not admin and attemps to get user other than themselves
*/
apikeyDelete: function(http_request_params){
    return picard.delete("/auth/apikey", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#userActiveupdate
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, set user active or deactive<br/>
* # Endpoint: <br/>
* /auth/userActiveUpdate<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardAuth.userActiveupdate(http_request_params)
 ```
* @param {(Boolean|number)=} active <pre>{"comment": "Flag if user is active", "required": true}</pre>
* @param {string} id <pre>{"comment": "User uuid to change", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
userActiveupdate: function(http_request_params){
    return picard.post("/auth/userActiveUpdate", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#oauthCallback
* @methodOf picard.service.picardAuth
*
* @description
*
* # Endpoint: <br/>
* /auth/oauthCallback/<provider><br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.oauthCallback(http_request_params)
 ```
* @param {string} code <pre>{"comment": "Callback code obtained from provider."}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
oauthCallback: function(http_request_params){
    return picard.get("/auth/oauthCallback/<provider>", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#groupList
* @methodOf picard.service.picardAuth
*
* @description
* Auth Endpoint, gets list of user groups<br/>
* # Endpoint: <br/>
* /auth/usergroupList<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardAuth.groupList(http_request_params)
 ```
* @param {string} qfilter <pre>{"default": null, "comment": "Filter group list by name or description", "setdefault": true}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Start responses at page x limit (ie, page number)", "setdefault": true}</pre>
* @param {number} limit <pre>{"default": 10, "comment": "Limit number of responses", "setdefault": true}</pre>
* @param {string} sortby <pre>{"default": "name", "comment": "Column to sort results on", "setdefault": true, "in": ["name", "description"]}</pre>
* @param {string} sortorder <pre>{"default": "asc", "comment": "Sort order, asc or desc", "setdefault": true, "in": ["asc", "desc"]}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
groupList: function(http_request_params){
    return picard.get("/auth/usergroupList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#apikeyFunctest
* @methodOf picard.service.picardAuth
*
* @description
* Simple endpoint for testing apikey functionality<br/>
* # Endpoint: <br/>
* /auth/apikeyTest<br/>
* # Permissions
# Usage
 ```js
 picardAuth.apikeyFunctest(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Apikey test failed
*/
apikeyFunctest: function(http_request_params){
    return picard.get("/auth/apikeyTest", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardAuth#login
* @methodOf picard.service.picardAuth
*
* @description
* Logs user in, creating a session<br/>
* # Endpoint: <br/>
* /auth/login<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardAuth.login(http_request_params)
 ```
* @param {string} password <pre>{"comment": "User cleartext password to check against", "minlength": 1, "required": true, "maxlength": 64}</pre>
* @param {string} name <pre>{"comment": "User name to log in", "minlength": 1, "required": true, "maxlength": 64}</pre>
* @param {(Boolean|number)=} remember <pre>{"default": false, "comment": "Flag to indicate if user wants session to extend beyond expiration", "setdefault": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Any login failure.
*/
login: function(http_request_params){
    return picard.post("/auth/login", http_request_params)
},
  }
}])

angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardCustom
* @module picard
* @description 
*/
.factory("Custom", ["$q", "$http", "picard", function ($q, $http, picard) {
  return {


/**
* @ngdoc function
* @name picard.service.picardCustom#updateUploadprocessrecord
* @methodOf picard.service.picardCustom
*
* @description
* Updates the bulk upload process.<br/>
* # Endpoint: <br/>
* /custom/load<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.updateUploadprocessrecord(http_request_params)
 ```
* @param {string} operation <pre>{"required": true, "in": ["start", "pause", "resume", "merge"]}</pre>
* @param {string} id <pre>{"default": null, "comment": "UUID of upload process.", "required": true}</pre>
* @param {number} numLines <pre>{"default": 500, "comment": "Specifies number of documents to load at once."}</pre>
* @param {number} pause_after <pre>{"default": -1, "comment": "Automatically pause the upload after this many iterations.  Useful for testing big uploads.  To not automatically pause keep at the default value of -1."}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to start uploading data process
*/
updateUploadprocessrecord: function(http_request_params){
    return picard.put("/custom/load", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#startLoadingprocess
* @methodOf picard.service.picardCustom
*
* @description
* Starts a process to load data from a file.<br/>
* # Endpoint: <br/>
* /custom/load<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.startLoadingprocess(http_request_params)
 ```
* @param {string} doctype <pre>{"default": null, "comment": "UUID of target doctype in which user wants to load data", "oneof": ["doctype", "doctypename"]}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Name of target doctype in which user wants to load data"}</pre>
* @param {number} filesize <pre>{"comment": "File size in bytes.  Used to ensure upload has completed before data is loaded.", "required": true}</pre>
* @param {string} filename <pre>{"comment": "Filename to attach to document", "endswith": ["json", "xls", "xlsx", "tsv"], "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to start uploading data process
*/
startLoadingprocess: function(http_request_params){
    return picard.post("/custom/load", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#getUploadprocessrecord
* @methodOf picard.service.picardCustom
*
* @description
* Gets the process record for the specified file.<br/>
* # Endpoint: <br/>
* /custom/load<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.getUploadprocessrecord(http_request_params)
 ```
* @param {string} id <pre>{"default": null, "comment": "UUID of upload process.", "required": true}</pre>
* @param {Boolean} download <pre>{"default": false, "comment": "If True then response contains S3 url that enables user to download and inspect errors."}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to start uploading data process
*/
getUploadprocessrecord: function(http_request_params){
    return picard.get("/custom/load", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#deleteUploadprocessrecord
* @methodOf picard.service.picardCustom
*
* @description
* Deletes the bulk upload process.<br/>
* # Endpoint: <br/>
* /custom/load<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.deleteUploadprocessrecord(http_request_params)
 ```
* @param {string} id <pre>{"default": null, "comment": "UUID of upload process.", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to start uploading data process
*/
deleteUploadprocessrecord: function(http_request_params){
    return picard.delete("/custom/load", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#doctypeCheck
* @methodOf picard.service.picardCustom
*
* @description
* Checks doctype entries for consistency between master and search datasources<br/>
* # Endpoint: <br/>
* /custom/doctypeCheck<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardCustom.doctypeCheck(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Doctype to reindex", "oneof": ["id", "doctypename"]}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Doctype name"}</pre>
* @param {Boolean} fix <pre>{"default": false, "comment": "Fix any issues found with consistency"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
doctypeCheck: function(http_request_params){
    return picard.put("/custom/doctypeCheck", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#documentBulkcreate
* @methodOf picard.service.picardCustom
*
* @description
* Custom Endpoint, creates multiple documents at once.<br/>
* # Endpoint: <br/>
* /custom/documentBulkCreate<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardCustom.documentBulkcreate(http_request_params)
 ```
* @param {Array} documents <pre>{"comment": "List of documents to create..", "required": true}</pre>
* @param {string} doctype <pre>{"comment": "Doctype UUID", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
documentBulkcreate: function(http_request_params){
    return picard.post("/custom/documentBulkCreate", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#mappingCreate
* @methodOf picard.service.picardCustom
*
* @description
* Create or update a mapping<br/>
* # Endpoint: <br/>
* /custom/mapping<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.mappingCreate(http_request_params)
 ```
* @param {string} doctype <pre>{"comment": "Doctype UUID", "oneof": ["doctype", "doctypename"]}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Doctype name"}</pre>
* @param {Object} mapping <pre>{"comment": "The mapping definition of the form: {\"properties\": {}}", "required": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create mapping
*/
mappingCreate: function(http_request_params){
    return picard.put("/custom/mapping", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#mappingGet
* @methodOf picard.service.picardCustom
*
* @description
* Gets a custom mapping<br/>
* # Endpoint: <br/>
* /custom/mapping<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.mappingGet(http_request_params)
 ```
* @param {Array} fields <pre>{"default": null, "comment": "A comma-separated list of fields.", "required": false, "setdefault": true}</pre>
* @param {string} doctype <pre>{"comment": "Doctype UUID.", "oneof": ["doctype", "doctypename"]}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Doctype name"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to get mapping
*/
mappingGet: function(http_request_params){
    return picard.get("/custom/mapping", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#doctypeUpdate
* @methodOf picard.service.picardCustom
*
* @description
* Updates an existing doctype.<br/>
* # Endpoint: <br/>
* /custom/doctype<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.doctypeUpdate(http_request_params)
 ```
* @param {string} id <pre>{"default": null, "comment": "Doctype UUID", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"default": null, "comment": "Doctype name to update"}</pre>
* @param {Boolean} files <pre>{"default": null, "comment": "Boolean value indicating if doctype documents can store files."}</pre>
* @param {Boolean} dynamic <pre>{"default": true, "comment": "Boolean value indicating if doctype supports dynamic mapping."}</pre>
* @param {string} readperm <pre>{"default": null, "comment": "Read Permission", "in": ["public", "owner", "users", "grouped"], "maxlength": 16}</pre>
* @param {Boolean} bulk_add <pre>{"default": null, "comment": "Boolean value indicating if doctype permits bulk uploads."}</pre>
* @param {string} writeperm <pre>{"default": null, "comment": "Description of doctype", "in": ["public", "owner", "users", "grouped"], "maxlength": 16}</pre>
* @param {string} description <pre>{"default": null, "comment": "Description of doctype", "maxlength": 255}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Cannot update doctype
*/
doctypeUpdate: function(http_request_params){
    return picard.put("/custom/doctype", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#doctypeCreate
* @methodOf picard.service.picardCustom
*
* @description
* Creates a new doctype<br/>
* # Endpoint: <br/>
* /custom/doctype<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.doctypeCreate(http_request_params)
 ```
* @param {string} readperm <pre>{"comment": "Read Permission", "required": true, "in": ["public", "owner", "users", "grouped"], "maxlength": 8}</pre>
* @param {string} writeperm <pre>{"comment": "Write Permission", "required": true, "in": ["public", "owner", "users", "grouped"], "maxlength": 8}</pre>
* @param {string} name <pre>{"comment": "Collection name, must be unique", "minlength": 1, "required": true, "maxlength": 255}</pre>
* @param {Boolean} files <pre>{"default": false, "comment": "Boolean value indicating if doctype documents can store files."}</pre>
* @param {string} id_seed <pre>{"default": null, "minlength": 1, "comment": "String value used for document uuid5 seeding.", "maxlength": 255}</pre>
* @param {string} description <pre>{"default": null, "comment": "Description of doctype", "maxlength": 255}</pre>
* @param {Object} settings <pre>{"default": null, "comment": "Indice settings of the form {\"settings\": {}}.  Mostly used for custom analyzers."}</pre>
* @param {Boolean} dynamic <pre>{"default": true, "comment": "Boolean value indicating if doctype supports dynamic mapping."}</pre>
* @param {number} shards <pre>{"default": null, "comment": "Number of shards to use for doctype in search index"}</pre>
* @param {Boolean} bulk_add <pre>{"default": false, "comment": "Boolean value indicating if doctype permits bulk uploads."}</pre>
* @param {Object} mappings <pre>{"default": null, "comment": "The mapping definition of the form: {\"properties\": {}}."}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create doctype
* @raises {409} DocumentConflict Doctype with name already exists
*/
doctypeCreate: function(http_request_params){
    return picard.post("/custom/doctype", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#doctypeGet
* @methodOf picard.service.picardCustom
*
* @description
* Get a collection doctype by name<br/>
* # Endpoint: <br/>
* /custom/doctype<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.doctypeGet(http_request_params)
 ```
* @param {string} id <pre>{"default": null, "comment": "Doctype uuid", "oneof": ["id", "name"], "setdefault": true}</pre>
* @param {string} name <pre>{"default": null, "comment": "Doctype name"}</pre>
* @param {Boolean} full <pre>{"default": false, "comment": "Return full doctype listing with search mapping"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {404} EndpointError Doctype not found
*/
doctypeGet: function(http_request_params){
    return picard.get("/custom/doctype", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#doctypeDelete
* @methodOf picard.service.picardCustom
*
* @description
* Deletes doctype<br/>
* # Endpoint: <br/>
* /custom/doctype<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardCustom.doctypeDelete(http_request_params)
 ```
* @param {string} id <pre>{"default": null, "comment": "Doctype uuid to delete", "oneof": ["id", "name"]}</pre>
* @param {string} name <pre>{"default": null, "comment": "Doctype name to delete"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {404} DocumentNotFound Cannot locate doctype to delete.
*/
doctypeDelete: function(http_request_params){
    return picard.delete("/custom/doctype", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#doctypeList
* @methodOf picard.service.picardCustom
*
* @description
* Custom Endpoint, gets list of approved doctypes<br/>
* # Endpoint: <br/>
* /custom/doctypeList<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.doctypeList(http_request_params)
 ```
* @param {Boolean} all <pre>{"default": false, "comment": "Boolean to specify if user wants all doctypes returned", "setdefault": true}</pre>
* @param {string} qfilter <pre>{"default": null, "comment": "Filter doctype list by name or description", "setdefault": true}</pre>
* @param {number} limit <pre>{"default": 10, "comment": "Limit number of responses"}</pre>
* @param {string} sortorder <pre>{"default": "asc", "comment": "Sort order, asc or des<stc", "setdefault": true, "in": ["asc", "desc"]}</pre>
* @param {Boolean} exact <pre>{"default": false, "comment": "Boolean to specify if user wants match", "setdefault": true}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Start responses at page x limit (ie, page number)", "setdefault": true}</pre>
* @param {string} sortby <pre>{"default": "name", "comment": "Column to sort results on", "setdefault": true, "in": ["name", "description"]}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
doctypeList: function(http_request_params){
    return picard.get("/custom/doctypeList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#bulkloadList
* @methodOf picard.service.picardCustom
*
* @description
* Custom Endpoint, gets list of bulkloads.<br/>
* # Endpoint: <br/>
* /custom/bulkloadList<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardCustom.bulkloadList(http_request_params)
 ```
* @param {Boolean} all <pre>{"default": false, "comment": "Boolean to specify if user wants all bulkmod processes returned.", "setdefault": true}</pre>
* @param {string} suffix <pre>{"default": null, "comment": "Used to limit results to only bulk load processes where the file name suffix is one of json,csv, xls, or xlsx.  Value of the parameter should be the suffix of interest.", "setdefault": true}</pre>
* @param {string} filename <pre>{"default": null, "comment": "Used to limit results to only bulk load processes where the file name begins with a particular string.  The value of this parameter should be the corresponding prefix.", "setdefault": true}</pre>
* @param {string} target_doctype <pre>{"default": null, "comment": "Used to limit results to only those that are loading data into a specific target_doctype.  The value of this parameter should be a valid uuid of thetarget doctype of interest"}</pre>
* @param {number} limit <pre>{"default": 100, "comment": "Limit number of responses", "setdefault": true}</pre>
* @param {string} sortby <pre>{"default": "modified", "comment": "Column to sort results on.  One of created, owner, modified, operation, target_doctype, filename", "setdefault": true, "in": ["created", "owner", "modified", "operation", "target_doctype", "filename"]}</pre>
* @param {string} owner <pre>{"default": null, "comment": "Used to limit results to only bulk load processes created by a specific user.  The value ofthis parameter should be a valid users uuid.", "setdefault": true}</pre>
* @param {string} operation <pre>{"default": null, "comment": "Used to limit results to only bulk load processes where the operation is currently equalto a specific value.  The value of this parameter should be one of start, pause, completed, equal, resume, merge.", "setdefault": true, "in": ["start", "pause", "completed", "resume", "merge"]}</pre>
* @param {number} page <pre>{"default": 0, "comment": "Start responses at page x limit (ie, page number)", "setdefault": true}</pre>
* @param {string} sortorder <pre>{"default": "desc", "comment": "Sort order, asc or desc", "setdefault": true, "in": ["asc", "desc"]}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
bulkloadList: function(http_request_params){
    return picard.get("/custom/bulkloadList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#doctypeClone
* @methodOf picard.service.picardCustom
*
* @description
* Clones existing doctype into new doctype<br/>
* # Endpoint: <br/>
* /custom/doctypeClone<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardCustom.doctypeClone(http_request_params)
 ```
* @param {string} newdoctypename <pre>{"comment": "Name of new doctype", "required": true}</pre>
* @param {string} id <pre>{"comment": "Doctype to reindex", "oneof": ["id", "doctypename"]}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Doctype name"}</pre>
* @param {string} newdescription <pre>{"comment": "Description of new doctype", "required": true}</pre>
* @param {Object} mappings <pre>{"default": null, "comment": "Mappings for new doctype (optional)"}</pre>
* @param {number} shards <pre>{"default": null, "comment": "Shard count for new index (optional)"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
doctypeClone: function(http_request_params){
    return picard.post("/custom/doctypeClone", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#documentSearch
* @methodOf picard.service.picardCustom
*
* @description
* Custom Endpoint, filters documents based on user input<br/>
* # Endpoint: <br/>
* /custom/documentSearch<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardCustom.documentSearch(http_request_params)
 ```
* @param {string} doctype <pre>{"comment": "Doctype UUID", "oneof": ["doctype", "doctypename"]}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Doctype name"}</pre>
* @param {Array} must <pre>{"default": [], "required": false, "commment": "Query JSON object specifying query clauses, all of which must be true.", "setdefault": true}</pre>
* @param {Array} sort <pre>{"default": [], "comment": "A comma-separated list of <field>:<direction> pairs.  Direction is one of asc or desc.", "setdefault": true}</pre>
* @param {Array} must_not <pre>{"default": [], "commment": "Query JSON object specifying query clauses, all of which must be false.", "setdefault": true}</pre>
* @param {number} from <pre>{"default": 0, "comment": "Starting offset.  Used for pagination.", "setdefault": true}</pre>
* @param {Array} _source_include <pre>{"default": [], "comment": "Fields to include in the response.", "setdefault": true}</pre>
* @param {Array} should <pre>{"default": [], "commment": "Query JSON object specifying should query clauses, one of which must of true.", "setdefault": true}</pre>
* @param {string} search_type <pre>{"default": "exact", "comment": "String defining the search_type.  Set equal to score to use scoring vs exact matching", "setdefault": true, "in": ["exact", "score"]}</pre>
* @param {Boolean} download <pre>{"default": false, "comment": "If True then results are written to a file in S3 and a url to the file is returned.", "setdefault": true}</pre>
* @param {Boolean} track_scores <pre>{"default": false, "comment": "Flag to determine if scores should be calculated.", "setdefault": true}</pre>
* @param {Object} aggs <pre>{"default": {}, "commment": "Aggregation JSON object specifying aggregation to make on data.", "setdefault": true}</pre>
* @param {Object} post_filter <pre>{"default": {}, "comment": "Post filter JSON object used to define which documents should be returned.", "setdefault": true}</pre>
* @param {Object} highlight <pre>{"default": {}, "comment": "Highlighting dictionary.", "setdefault": true}</pre>
* @param {Boolean} flatten <pre>{"default": false, "comment": "Flag controlling if Object fields are flattend before being returned.", "setdefault": true}</pre>
* @param {number} size <pre>{"default": 10, "comment": "Maximum Number of hits to return.", "setdefault": true}</pre>
* @param {string} download_type <pre>{"default": "tsv", "comment": "Defines file type for download.  Current valid values are csv or json.", "setdefault": true, "in": ["tsv", "json"]}</pre>
* @param {Array} _source_exclude <pre>{"default": [], "comment": "Fields to exclude from the response.", "setdefault": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {401} Permission Denied User lacks priveledges for doctype.
* @raises {401} Permission Denied Cannot specify global bucket within aggregation.
* @raises {401} Permission Denied Cannot specify index or ids queries within body of search request.'
* @raises {404} DoctypeNotFound Doctype not found.
*/
documentSearch: function(http_request_params){
    return picard.get("/custom/documentSearch", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#fieldUpdate
* @methodOf picard.service.picardCustom
*
* @description
* Custom Endpoint, modifies fields within a document.<br/>
* # Endpoint: <br/>
* /custom/fieldUpdate<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardCustom.fieldUpdate(http_request_params)
 ```
* @param {string} field <pre>{"required": true, "commment": "Field to modify."}</pre>
* @param {string} id <pre>{"comment": "Document UUID.", "required": true}</pre>
* @param {string} op <pre>{"required": true, "commment": "One of push, pop, or delete.", "in": ["push", "pop", "delete"]}</pre>
* @param {Array} values <pre>{"default": [], "comment": "Values to push or pop."}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
fieldUpdate: function(http_request_params){
    return picard.put("/custom/fieldUpdate", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#documentUpdate
* @methodOf picard.service.picardCustom
*
* @description
* Updates an existing document<br/>
* # Endpoint: <br/>
* /custom/document<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardCustom.documentUpdate(http_request_params)
 ```
* @param {Object} document <pre>{"comment": "Updated document body", "required": true}</pre>
* @param {string} id <pre>{"default": null, "comment": "Document UUID", "oneof": ["id", ["name", "doctype"], ["name", "doctypename"]], "setdefault": true}</pre>
* @param {string} name <pre>{"default": null, "comment": "Name of document to find"}</pre>
* @param {string} doctype <pre>{"default": null, "comment": "UUID of doctype for document", "setdefault": true}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Name of doctype for document"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {404} DocumentNotFound Document not found
* @raises {400} EndpointError Unable to update document
*/
documentUpdate: function(http_request_params){
    return picard.put("/custom/document", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#documentCreate
* @methodOf picard.service.picardCustom
*
* @description
* Creates a custom document<br/>
* # Endpoint: <br/>
* /custom/document<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardCustom.documentCreate(http_request_params)
 ```
* @param {Object} document <pre>{"comment": "Document Body", "minlength": 1, "required": true}</pre>
* @param {string} doctype <pre>{"comment": "Doctype UUID", "oneof": ["doctype", "doctypename"]}</pre>
* @param {string} doctypename <pre>{"default": false, "comment": "Doctype name", "setdefault": true}</pre>
* @param {string} _id <pre>{"default": null, "minlength": 1, "setdefault": true, "comment": "Optional custom Document ID string, for reproducible uuid 5 id"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create document
*/
documentCreate: function(http_request_params){
    return picard.post("/custom/document", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#documentGet
* @methodOf picard.service.picardCustom
*
* @description
* Get a custom document by id<br/>
* # Endpoint: <br/>
* /custom/document<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardCustom.documentGet(http_request_params)
 ```
* @param {string} id <pre>{"default": null, "comment": "Document UUID", "oneof": ["id", ["name", "doctype"], ["name", "doctypename"]], "setdefault": true}</pre>
* @param {string} name <pre>{"default": null, "comment": "Custom Document ID string used at document creation.", "setdefault": true}</pre>
* @param {string} doctype <pre>{"default": null, "comment": "UUID of doctype for document", "setdefault": true}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Name of doctype for document", "setdefault": true}</pre>
* @param {Boolean} files <pre>{"default": false, "comment": "Boolean that controls whether a list of the documents files are included in the response.", "setdefault": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {404} DocumentNotFound Document not found
*/
documentGet: function(http_request_params){
    return picard.get("/custom/document", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#documentDelete
* @methodOf picard.service.picardCustom
*
* @description
* Deletes an existing document, admin only, users delete by updating with deleted bit<br/>
* # Endpoint: <br/>
* /custom/document<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardCustom.documentDelete(http_request_params)
 ```
* @param {string} id <pre>{"default": null, "comment": "Document UUID", "oneof": ["id", ["name", "doctype"], ["name", "doctypename"]]}</pre>
* @param {string} name <pre>{"default": null, "comment": "Name of document to find"}</pre>
* @param {string} doctype <pre>{"default": null, "comment": "UUID of doctype for document"}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Name of doctype for document"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {404} DocumentNotFound Document not found
* @raises {400} EndpointError Unable to delete comment
*/
documentDelete: function(http_request_params){
    return picard.delete("/custom/document", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#doctypeReindex
* @methodOf picard.service.picardCustom
*
* @description
* Reindexes doctype, optionally with new mapping<br/>
* # Endpoint: <br/>
* /custom/doctypeReindex<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardCustom.doctypeReindex(http_request_params)
 ```
* @param {string} id <pre>{"comment": "Doctype to reindex", "oneof": ["id", "doctypename"]}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Doctype name"}</pre>
* @param {Object} mappings <pre>{"default": null, "comment": "New mapping for reindexed doctype"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
doctypeReindex: function(http_request_params){
    return picard.put("/custom/doctypeReindex", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#groupingCreate
* @methodOf picard.service.picardCustom
*
* @description
* Creates a custom permission grouping<br/>
* # Endpoint: <br/>
* /custom/grouping<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardCustom.groupingCreate(http_request_params)
 ```
* @param {string} perm_type <pre>{"comment": "Grouping Type (role or usergroup)", "required": true, "in": ["read", "write"]}</pre>
* @param {string} doctype <pre>{"comment": "Doctype UUID", "required": true}</pre>
* @param {string} grouping_uuid <pre>{"comment": "UUID of role or usergroup referenced", "required": true}</pre>
* @param {string} grouping_type <pre>{"comment": "Grouping Type (role, roleuser or usergroup)", "required": true, "in": ["role", "usergroup", "roleuser"]}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to create grouping
*/
groupingCreate: function(http_request_params){
    return picard.post("/custom/grouping", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardCustom#groupingDelete
* @methodOf picard.service.picardCustom
*
* @description
* Deletes a custom permission grouping<br/>
* # Endpoint: <br/>
* /custom/grouping<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardCustom.groupingDelete(http_request_params)
 ```
* @param {string} perm_type <pre>{"comment": "Perm Type (read or write)", "required": true, "in": ["read", "write"]}</pre>
* @param {string} doctype <pre>{"comment": "Doctype UUID", "required": true}</pre>
* @param {string} grouping_uuid <pre>{"comment": "UUID of role or usergroup referenced", "required": true}</pre>
* @param {string} grouping_type <pre>{"comment": "Grouping Type (role, roleuser or usergroup)", "required": true, "in": ["role", "usergroup", "roleuser"]}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete grouping
*/
groupingDelete: function(http_request_params){
    return picard.delete("/custom/grouping", http_request_params)
},
  }
}])

angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardFiles
* @module picard
* @description 
*/
.factory("Files", ["$q", "$http", "picard", function ($q, $http, picard) {
  return {


/**
* @ngdoc function
* @name picard.service.picardFiles#deleteFiles
* @methodOf picard.service.picardFiles
*
* @description
* Deletes all files associated with document or doctype.<br/>
* # Endpoint: <br/>
* /files/deleteFiles<br/>
* # Permissions
* *Workforce System Role,Administrators System Role<br/>
# Usage
 ```js
 picardFiles.deleteFiles(http_request_params)
 ```
* @param {string} document_id <pre>{"comment": "Document id.", "oneof": ["document_id", "doctype_id"]}</pre>
* @param {string} doctype_id <pre>{"comment": "Doctype id."}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete files
*/
deleteFiles: function(http_request_params){
    return picard.put("/files/deleteFiles", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardFiles#fileGetuploadurl
* @methodOf picard.service.picardFiles
*
* @description
* Uploads a file to link into a document<br/>
* # Endpoint: <br/>
* /files/file<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardFiles.fileGetuploadurl(http_request_params)
 ```
* @param {string} filename <pre>{"comment": "Filename to attach to document", "required": true}</pre>
* @param {string} id <pre>{"default": null, "comment": "Document UUID to attach file to", "oneof": ["id", ["name", "doctype"], ["name", "doctypename"]]}</pre>
* @param {string} name <pre>{"default": null, "comment": "Name of document to attach file to"}</pre>
* @param {string} doctype <pre>{"default": null, "comment": "UUID of doctype of document to attach file to"}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Name of doctype of document to attach file to"}</pre>
* @param {string} contenttype <pre>{"default": null, "comment": "File content type.  If not defined then file suffix must be one of .xls, .xlsx, .tsv, .json, .png, .jpg or .jpeg.  If the suffix is different thenplease provide the valid content-type.  Here is a useful link: http://www.freeformatter.com/mime-types-list.html"}</pre>
* @param {Boolean} credentials <pre>{"default": false, "comment": "Boolean indicating whether user wants federation token."}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to upload file
*/
fileGetuploadurl: function(http_request_params){
    return picard.post("/files/file", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardFiles#fileGetdownloadurl
* @methodOf picard.service.picardFiles
*
* @description
* Get a custom document linked file from the filestore.  Does notrequire a valid user to enable downloads from documents with publicread permissions.<br/>
* # Endpoint: <br/>
* /files/file<br/>
* # Permissions
* Authentication not required<br/>
# Usage
 ```js
 picardFiles.fileGetdownloadurl(http_request_params)
 ```
* @param {string} filename <pre>{"comment": "Filename to get", "required": true}</pre>
* @param {string} id <pre>{"default": null, "comment": "Document UUID to attach file to", "oneof": ["id", ["name", "doctype"], ["name", "doctypename"]]}</pre>
* @param {string} name <pre>{"default": null, "comment": "Name of document to get file from", "setdefault": true}</pre>
* @param {string} doctype <pre>{"default": null, "comment": "UUID of doctype for document to get file from", "setdefault": true}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Name of doctype of document", "setdefault": true}</pre>
* @param {Boolean} credentials <pre>{"default": false, "comment": "Boolean indicating whether user wants federation token.", "setdefault": true}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {404} DocumentNotFound Document not found
*/
fileGetdownloadurl: function(http_request_params){
    return picard.get("/files/file", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardFiles#fileDelete
* @methodOf picard.service.picardFiles
*
* @description
* Deletes document linked file<br/>
* # Endpoint: <br/>
* /files/file<br/>
* # Permissions
* *valid user<br/>
# Usage
 ```js
 picardFiles.fileDelete(http_request_params)
 ```
* @param {string} filename <pre>{"comment": "Filename to delete", "required": true}</pre>
* @param {string} id <pre>{"default": null, "comment": "Document UUID to delete file from", "oneof": ["id", ["name", "doctype"], ["name", "doctypename"]]}</pre>
* @param {string} name <pre>{"default": null, "comment": "Name of document to delete file from"}</pre>
* @param {string} doctype <pre>{"default": null, "comment": "UUID of doctype for document to delete file from"}</pre>
* @param {string} doctypename <pre>{"default": null, "comment": "Name of doctype of document to delete file from"}</pre>
* @returns {promise} Paired down response of angulars $http method
* @raises {400} EndpointError Unable to delete document linked file
*/
fileDelete: function(http_request_params){
    return picard.delete("/files/file", http_request_params)
},
  }
}])

angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardGeoiptool
* @module picard
* @description 
*/
.factory("Geoiptool", ["$q", "$http", "picard", function ($q, $http, picard) {
  return {


/**
* @ngdoc function
* @name picard.service.picardGeoiptool#geoipGuess
* @methodOf picard.service.picardGeoiptool
*
* @description
* Guesses location attributes of provided city<br/>
* # Endpoint: <br/>
* /geoiptool/targetGuess<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardGeoiptool.geoipGuess(http_request_params)
 ```
* @param {string} target <pre>{"comment": "City to guess", "required": true}</pre>
* @param {string} supertype <pre>{"default": "state", "comment": "Type of target (city/state/country/continent)"}</pre>
* @param {string} supertarget <pre>{"default": null, "comment": "Name of supertarget"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
geoipGuess: function(http_request_params){
    return picard.get("/geoiptool/targetGuess", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardGeoiptool#geoipClosebyname
* @methodOf picard.service.picardGeoiptool
*
* @description
* Generates a list of targets within a certain range of a target<br/>
* # Endpoint: <br/>
* /geoiptool/targetClosebyname<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardGeoiptool.geoipClosebyname(http_request_params)
 ```
* @param {string} target <pre>{"comment": "Target name to center on", "required": true}</pre>
* @param {number} count <pre>{"default": null, "comment": "Get first N entries from list"}</pre>
* @param {string} targettype <pre>{"default": "city", "comment": "Type of target (city/state/country/continent)"}</pre>
* @param {number} distance <pre>{"default": 10, "comment": "Distance from target in km"}</pre>
* @param {string} supertarget <pre>{"default": null, "comment": "Name of supertarget"}</pre>
* @param {string} supertype <pre>{"default": "state", "comment": "Type of target (city/state/country/continent)"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
geoipClosebyname: function(http_request_params){
    return picard.get("/geoiptool/targetClosebyname", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardGeoiptool#randomList
* @methodOf picard.service.picardGeoiptool
*
* @description
* Generates a list of random IP addresses<br/>
* # Endpoint: <br/>
* /geoiptool/randomList<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardGeoiptool.randomList(http_request_params)
 ```
* @param {string} target <pre>{"comment": "Target name", "required": true}</pre>
* @param {number} count <pre>{"default": 1, "comment": "Number of IP addresses to generate"}</pre>
* @param {string} supertarget <pre>{"default": null, "comment": "Supertarget Name"}</pre>
* @param {Boolean} location <pre>{"default": false, "comment": "Flag to include lat/long data with ip"}</pre>
* @param {string} supertype <pre>{"default": null, "comment": "Type of supertarget", "in": ["city", "state", "country", "continent"]}</pre>
* @param {(Array|string)=} type <pre>{"default": "city", "comment": "Type of target", "in": ["city", "state", "country", "continent"]}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
randomList: function(http_request_params){
    return picard.get("/geoiptool/randomList", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardGeoiptool#geoipdbReload
* @methodOf picard.service.picardGeoiptool
*
* @description
* Pulls down new copy of geoipdb and reloads<br/>
* # Endpoint: <br/>
* /geoiptool/dbReload<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardGeoiptool.geoipdbReload(http_request_params)
 ```
* @returns {promise} Paired down response of angulars $http method
*/
geoipdbReload: function(http_request_params){
    return picard.get("/geoiptool/dbReload", http_request_params)
},


/**
* @ngdoc function
* @name picard.service.picardGeoiptool#geoipRandom
* @methodOf picard.service.picardGeoiptool
*
* @description
* Generates a list of targets for specified type<br/>
* # Endpoint: <br/>
* /geoiptool/targetList<br/>
* # Permissions
* *Administrators System Role<br/>
# Usage
 ```js
 picardGeoiptool.geoipRandom(http_request_params)
 ```
* @param {string} supertype <pre>{"default": "state", "comment": "Type of target (city/state/country/continent)"}</pre>
* @param {string} targettype <pre>{"default": "city", "comment": "Type of target (city/state/country/continent)"}</pre>
* @param {number} count <pre>{"default": null, "comment": "Get N random entries from list"}</pre>
* @param {string} supertarget <pre>{"default": null, "comment": "Name of supertarget"}</pre>
* @returns {promise} Paired down response of angulars $http method
*/
geoipRandom: function(http_request_params){
    return picard.get("/geoiptool/targetList", http_request_params)
},
  }
}])

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

'use strict';

angular
    .module('picard')
    /**
     * @ngdoc object
     * @name picard.config:picardEndpoints
     *
     * @description
     * Object with keys corresponding to endpoint routes (e.g. /custom/document) and values the corresponding
     * routes' documentation.
     */
    .constant('picardEndpoints', {
        /**
         * @ngdoc property
         * @name picard.config.picardEndpoints#routes
         * @propertyOf picard.config:picardEndpoints
         * @returns {Object} Object with keys corresponding to endpoint routes (e.g. /custom/document) and values the corresponding
         * routes' documentation.
         */
        routes: {}
    })
    /**
     * @ngdoc object
     * @name picard.config:picardConfig
     *
     * @description
     * Default values for making api requests
     */
    .constant('picardConfig', {
        /**
         * @ngdoc property
         * @name picard.config.picardConfig#fullresponse
         * @propertyOf picard.config:picardConfig
         * @returns {bool} When true entire http response is returned.
         *
         * @description
         * Used to control which data gets returned from API call.
         *
         * @example
         *   picardConfig.fullResponse = true;
         */
        fullResponse: false,

        /**
         * @ngdoc property
         * @name picard.config.picardConfig#config
         * @propertyOf picard.config:picardConfig
         * @returns {object} $http config
         *
         * @description
         * Object describing the request to be made and how it should be processed. See here
         * for list of properties: https://docs.angularjs.org/api/ng/service/$http
         *
         */
        config: {
            cache: false
        },

        /**
         * @ngdoc property
         * @name picard.config.picardConfig#base_url
         * @propertyOf picard.config:picardConfig
         * @returns {string} API endpoint(e.g. https://stackname.picard.io/)
         *
         * @description
         * The API endpoint for your Picard stack.
         */
        base_url: 'https://www.picard.io/'
    })

    /**
     * @ngdoc service
     * @name picard.service.picard
     * @module picard
     * @description Functions for HTTP requests.
     */

    .factory('picard', ['$q', '$http', 'picardConfig', function ($q, $http, picardConfig) {

        var baseUrl = picardConfig.base_url;
        /**
         *  @private
         * @name picard.service.picard#makeHttpRequest
         * @methodOf picard.service.picard
         *
         * @description
         * Internal function that's called by public functions to make API requests to Picard.
         *
         * @param {string} method Http method (e.g. GET, PUT, POST, DELETE)
         * @param {string} endpoint Valid picard endpoint.
         * @param {Object} params HTTP parameters
         * @param {Object} [options] HTTP config options.  See usage section here for options https://docs.angularjs.org/api/ng/service/$http
         */

        function makeHttpRequest(method, endpoint, params, options) {
            if (typeof params != 'object') {
                params = {}
            }
            // Build the $http config object
            // If options is specified as a parameter then the values
            // for the fields in the options.config object
            // will overwrite the defaults.
            var opts = angular.extend({}, picardConfig, options || {});
            var http = angular.extend({
                method: method,
                url: baseUrl + endpoint,
                withCredentials: true,
                responseType: 'json'
            }, opts.config);
            // fitbit endpoint requires withCredentials parameter be false
            if (endpoint == '/auth/oauthAuthorize/fitbit') {
                http.withCredentials = false;
            }
            // build the params or data fields depending on the http method
            if (method == 'GET' || method == 'DELETE') {
                http.params = {p: params};
            } else {
                http.data = params;
            }
            // make the API call and call either the success or error function
            return $http(http).then(
                success.bind(this, opts),
                err.bind(this, opts)
            );
        }

        /**
         *  @private
         * @name picard.service.picard#success
         * @methodOf picard.service.picard
         *
         * @description
         * Internal function called if API call is successful, meaning its status code is in the range [200,299].
         * If opts.fullResponse is true then the entire http response is returned.  Otherwise
         * it returns only the data and status fields.  Note opts.fullResponse is false by default. To
         * modify the value in a http GET call create an object with {fullResponse:true} and then pass it into
         * the options parameter to the Picard.get call.
         *
         *
         * @param {object} opts http config options used to make call
         * @param {object} res http response
         */

        function success(opts, res) {
            var ret = res.data;
            ret.status = res.status;
            if (opts.fullResponse) {
                ret = res;
            }
            return ret;
        }

        /**
         * @private
         * @name picard.service.picard#error
         * @methodOf picard.service.picard
         *
         * @description
         * Internal function called if API call is unsuccessful, meaning its status code is outside the range [200,299].
         * The response is the rejection of the promise.  If opts.fullResponse is true then the entire http response is returned.  Otherwise
         * it returns only the data and status fields.  Note opts.fullResponse is false by default. To
         * modify the value in a http GET call create an object with {fullRespone:true} and then pass it into
         * the options parameter to the Picard.get call.
         *
         * @param {object} opts http config options used to make call
         * @param {object} res http response
         */

        function err(opts, res) {
            var ret = res.data;
            ret.status = res.status;
            if (opts.fullResponse) {
                ret = res;
            }
            return $q.reject(ret);
        }

        // return functions to call makeHttpRequest function
        return {
            /**
             * @ngdoc function
             * @name picard.service.picard#get
             * @methodOf picard.service.picard
             *
             * @description
             * Public function which preforms a GET request to the picard api
             *
             * @param {string} endpoint endpoint name (required)
             * @param {object} [params] api call request parameters
             * @param {options} [options] http options to override
             */
            get: function (endpoint, params, options) {
                return makeHttpRequest('GET', endpoint, params, options);
            },
            /**
             * @ngdoc function
             * @name picard.service.picard#post
             * @methodOf picard.service.picard
             *
             * @description
             * Public function which preforms a POST request to the picard api
             *
             * @param {string} endpoint endpoint name (required)
             * @param {object} [params] api call request parameters
             * @param {options} [options] http options to override
             */
            post: function (endpoint, params, options) {
                return makeHttpRequest('POST', endpoint, params, options);
            },
            /**
             * @ngdoc function
             * @name picard.service.picard#put
             * @methodOf picard.service.picard
             *
             * @description
             * Public function which preforms a PUT request to the picard api
             *
             * @param {string} endpoint endpoint name (required)
             * @param {object} [params] api call request parameters
             * @param {options} [options] http options to override
             */
            put: function (endpoint, params, options) {
                return makeHttpRequest('PUT', endpoint, params, options);
            },
            /**
             * @ngdoc function
             * @name picard.service.picard#delete
             * @methodOf picard.service.picard
             *
             * @description
             * Public function which preforms a DELETE request to the picard api
             *
             * @param {string} endpoint endpoint name (required)
             * @param {object} [params] api call request parameters
             * @param {options} [options] http options to override
             */
            delete: function (endpoint, params, options) {
                return makeHttpRequest('DELETE', endpoint, params, options);
            }
        }
    }])

    .run(function(picard, picardEndpoints){
        picard.get("/admin/sitemap").then(function(res){
            var endpoints = {};
            var sitemap = res.routes;
            var modules = Object.keys(sitemap);
            modules.forEach(function(module){
                var functions = Object.keys(sitemap[module]);
                functions.forEach(function(f){
                    var methods = Object.keys(sitemap[module][f]);
                    methods.forEach(function(method){
                        var endpoint_doc = sitemap[module][f][method];
                        if(!endpoints.hasOwnProperty(endpoint_doc['route'])){
                            endpoints[endpoint_doc['route']] = {};
                        }
                        endpoints[endpoint_doc['route']][method] = endpoint_doc;
                    });
                });
            });
            picardEndpoints.routes = endpoints;
        });
    });


angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardTerms
* @module picard
* @description 
*/
.factory("Terms", ["$q", "$http", "picard", function ($q, $http, picard) {
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

})();