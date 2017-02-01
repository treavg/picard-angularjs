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
