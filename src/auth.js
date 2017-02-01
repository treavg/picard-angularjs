angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardAuth
* @module picard
* @description 
*/
.factory("picardAuth", ["$q", "$http", "picard", function ($q, $http, picard) {
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
