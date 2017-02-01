angular.module("picard")
/**
* @ngdoc service
* @name picard.service.picardGeoiptool
* @module picard
* @description 
*/
.factory("picardGeoiptool", ["$q", "$http", "picard", function ($q, $http, picard) {
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
