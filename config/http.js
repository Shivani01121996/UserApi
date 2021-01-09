const apm = require('elastic-apm-node');

/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
   *                                                                           *
   * Sails/Express middleware to run for every HTTP request.                   *
   * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
   *                                                                           *
   * https://sailsjs.com/documentation/concepts/middleware                     *
   *                                                                           *
   ****************************************************************************/

  middleware: {

    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP requests.           *
     * (This Sails app's routes are handled by the "router" middleware below.)  *
     *                                                                          *
     ***************************************************************************/

    order: [
      'bodyParser',
      'elasticApm'
    ],


    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests.       *
     *                                                                          *
     * https://sailsjs.com/config/http#?customizing-the-body-parser             *
     *                                                                          *
     ***************************************************************************/

    bodyParser: (function _configureBodyParser() {
      var skipper = require('skipper');
      var middlewareFn = skipper({
        strict: true,
        limit: '50mb',
        maxTimeToBuffer: 200000
      });
      return middlewareFn;
    })(),

    /***************************************************************************
     *                                                                          *
     * Custom middleware functions defined below. Examples:                     *
     *   - initialize passport                                                  *
     *   - custom logger                                                        *
     *                                                                          *
     ***************************************************************************/
    elasticApm: function (req, res, next) {
      try {
      } catch (err) {
        console.log('elasticApm middleware error', err);
      }
      next();
    },
  },

};
