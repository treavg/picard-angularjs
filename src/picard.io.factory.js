'use strict';

angular
  .module('picardio')
      .constant('picardioConfig', {
        /**
         * @ngdoc property
         * @name picardio.config.picardioBaseUrl#fullresponse
         * @propertyOf picardio.config:picardioConfig
         * @returns {bool} When true entire http response is returned.
         *
         * @description
         * Used to control which data gets returned from API call.
         *
         * @example
         *   // Causes angular-moment to always treat the input values as unix timestamps
         *   picardioConfig.fullResponse = true;
         */
        fullResponse: false,

        /**
         * @ngdoc property
         * @name picardio.config.picardioConfig#config
         * @propertyOf picardio.config:picardioConfig
         * @returns {object} $http config
         *
         * @description
         * Object describing the request to be made and how it should be processed. See here
         * for list of properties: https://docs.angularjs.org/api/ng/service/$http
         *
         */
        config: {
            cache: false,
            crypt: false,
            fullcryptquery: false
        },

        /**
         * @ngdoc property
         * @name picardio.config.picardioConfig#base_url
         * @propertyOf picardio.config:picardioConfig
         * @returns {string} API endpoint(e.g. https://stackname.picard.io/)
         *
         * @description
         * The API endpoint for your Picard stack.
         */
        base_url: null
      })

  .factory('picard', ['$q', '$http', '$window', '$state', 'picardioConfig', function ($q, $http, $window, $state, picardioConfig) {

       var baseUrl = picardioConfig.base_url;

        /**
         * @ngdoc function
         * @name picardio.factory.picard#generateResponse
         * @methodOf picardio.factory.picard
         *
         * @description
         * Builds the http config variable and makes the API call to the endpoint
         *
         * @param {string} method Http method (e.g. GET, PUT, POST, DELETE)
         * @param {string} endpoint valid picardio endpoint
         * @params {object} params http parameters
         * @params {object} options http config options
         */

        function generateResponse (method, endpoint, params, options) {
          if(typeof params != 'object'){
            params = {}
          }
          // Build the $http config object
          // If options is specified as a parameter then the values 
          // for the fields in the options.config object 
          // will overwrite the defaults.
            var opts = angular.extend({}, picardioConfig, options || {});
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
         * @name picardio.factory.picard#success
         * @methodOf picardio.factory.picard
         *
         * @description
         * Returns either the full reponse or just the data and http status
         *
         * @params {object} opts http config options used to make call
         * @params {object} res http response         
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
         * @name picardio.factory.picard#error
         * @methodOf picardio.factory.picard
         *
         * @description
         * Returns either the full reponse or just the data and http status
         *
         * @params {object} opts http config options used to make call
         * @params {object} res http response         
         */

        function err (opts, res) {
            var ret = res.data;
            ret.status = res.status;
            if (opts.fullResponse) {
                ret = res;
            }
            return $q.reject(ret);
        }


        // return functions to call generateResponse function
        return {
            get: function (endpoint, params, options) {
                return generateResponse('GET', endpoint, params, options);
            },
            post: function (endpoint, params, options) {
                return generateResponse('POST', endpoint, params, options);
            },
            put: function (endpoint, params, options) {
                return generateResponse('PUT', endpoint, params, options);
            },
            delete: function (endpoint, params, options){
                return generateResponse('DELETE', endpoint, params, options);
            }
        };


    }
  ]);