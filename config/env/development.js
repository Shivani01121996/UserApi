module.exports = {
  datastores: {
    default: {
      url: 'postgresql://chakradbuser:chakradbpassword@127.0.0.1:5432/chakra_test'
      // url: process.env.CHQ_DEV_MYSQL_URI || 'postgresql://chakradbuser:chakradbpassword@127.0.0.1/chakra_prod',
      //--------------------------------------------------------------------------
      // /\  Hard-code your staging db `url`.
      // ||  (or use system env var: `sails_datastores__default__url`)
      //--------------------------------------------------------------------------
    },
  },

  models: {
    migrate: 'alter'
  },

  security: {
    cors: {
      allRoutes: true,
      allowOrigins: [
      ],
      allowCredentials: true
    }
  },

  session: {
    // url: 'redis://shared:some_password_everyone_knows@bigsquid.redistogo.com:9562/staging-sessions',
    //--------------------------------------------------------------------------
    // /\  Hard-code your staging Redis server's `url` again here.
    // ||  (or use system env var: `sails_session__url`)
    //--------------------------------------------------------------------------
  },

  uploads: {
  },

  custom: {
    baseUrl: 'http://localhost:1337',
  },

  log: {
    level: 'verbose'
  },
};
