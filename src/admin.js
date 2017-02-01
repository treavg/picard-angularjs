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
