/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'antar-segar',
    environment: environment,
    rootURL: '/',
    locationType: 'auto', firebase:{
      apiKey: "AIzaSyDH1y2y0xthF68Lx8WGKyhiHJRGDkhnt-A",
      authDomain: "antarsegar.firebaseapp.com",
      databaseURL: "https://antarsegar.firebaseio.com",
      storageBucket: "antarsegar.appspot.com",
      messagingSenderId: "186575763015"
    }, torii: {
      sessionServiceName: 'session'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
