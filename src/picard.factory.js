'use strict';

/**
 * @ngdoc overview
 * @name picard
 *
 * @description
 * picard module provides access to picard api
 */
angular
    .module('picard')
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
     */


    .factory('picard', ['$q', '$http', 'picardConfig', function ($q, $http, picardConfig) {

        var baseUrl = picardConfig.base_url;

        /**
         * @ngdoc function
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

        function makeHttpRequest (method, endpoint, params, options) {
            if(typeof params != 'object'){
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
            if(endpoint == '/auth/oauthAuthorize/fitbit'){
                http.withCredentials = false;
            }
            // build the params or data fields depending on the http method
            if(method == 'GET' || method == 'DELETE'){
                http.params = {p: params};
            } else {
                http.data = params;
            }
            // make the API call and call either the success or error function
            return $http(http).then(
                res.bind(this, opts),
                err.bind(this, opts)
            );
        }


        /**
         * @ngdoc function
         * @name picard.service.picard#success
         * @methodOf picard.service.picard
         *
         * @description
         * Internal function called if API call is successful, meaning its status code is in the range [200,299].
         * If opts.fullResponse is true then the entire http response is returned.  Otherwise
         * it returns only the data and status fields.  Note opts.fullResponse is false by default. To
         * modify the value in a http GET call create an object with {fullRespone:true} and then pass it into
         * the options parameter to the Picard.get call.
         *
         *
         * @param {object} opts http config options used to make call
         * @param {object} res http response
         */

        function res (opts, res) {
            var ret = res.data;
            ret.status = res.status;
            if (opts.fullResponse) {
                ret = res;
            }
            return ret;
        }

        /**
         * @ngdoc function
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

        function err (opts, res) {
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
            delete: function (endpoint, params, options){
                return makeHttpRequest('DELETE', endpoint, params, options);
            },
            /**
             * @ngdoc function
             * @name picard.service.picard#login
             * @methodOf picard.service.picard
             *
             * @description
             * Logs a user in and stashes the session key
             *
             * @param {string} name username
             * @param {string} password user password
             * @param {boolean} [remember] set to true if you want user session to stay valid for time length specified by
             * REMEMBER_COOKIE_DURATION config variable.
             */
            login: function(username, password, remember){
                var http_request_params = {
                    name: username,
                    password: password,
                    remember: typeof remember === 'boolean' ? remember: false
                };
                return makeHttpRequest('POST', 'auth/login', http_request_params);
            },
            /**
             * @ngdoc function
             * @name picard.service.picard#logout
             * @methodOf picard.service.picard
             *
             * @description
             * Logs a user out.  Does not require any parameters.
             *
             */
            logout: function(){
                return makeHttpRequest('POST', 'auth/logout');
            },
            /**
             * @ngdoc function
             * @name picard.service.picard#register
             * @methodOf picard.service.picard
             *
             * @description
             * Registers a new user account
             * <pre>
             *     // succeeds in creating new user
             *     picard.register('jonnie17', 'superSecret12345', 'john@email.com');
             *     // throws 409 as user with username johnnie 17 already exists
             *     picard.register('jonnie17', 'superSecret12345', 'john@email.com');
             *     // throws 409 as user with email john@email.com already exists
             *     picard.register('susan19', 'superSecret12345', 'john@email.com');
             * </pre>
             *
             * @param {string} name username
             * @param {string} password user password
             * @param {string} email user email address
             */
            register: function(name, password, email){
                var http_request_params = {
                    'name': name,
                    'password': password,
                    'email': email
                };
                return makeHttpRequest('POST', 'auth/logout', http_request_params);
            },
            /**
             * @ngdoc function
             * @name picard.service.picard#forgotPassword
             * @methodOf picard.service.picard
             *
             * @description
             * Sends email containing password reset token.
             * <pre>
             *     // sends user an email address
             *     picard.forgotPassord('john@email.com);
             * </pre>
             *
             * @param {string} email user email address
             */
            forgotPassword: function(email){
                var http_request_params = {
                    'email': email
                };
                return makeHttpRequest('POST', 'auth/logout', http_request_params);
            }
        };

    }
    ]);


