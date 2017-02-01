angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardCustom
* @module picard
* @description 
*/
.factory("picardCustom", ["$q", "$http", "picard", function ($q, $http, picard) {
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
