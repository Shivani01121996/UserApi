// api/helpers/api-check/list.js
module.exports = {

  friendlyName: 'List of all users.',

  description: '',

  extendedDescription: '',

  inputs: {

    limit: {
      type: 'number'
    },

    skip: {
      type: 'number'
    },

    sort: {
      type: 'ref'
    },
  },

  exits: {
    success: {
      description: 'Returning list of all users .'
    },
  },

  fn: async function (inputs, exits) {
    try {
      const { limit, skip, sort } = inputs;
      const query = {
        limit, skip, sort
      };
      query.where = _.omitBy(query.where, _.isNil);
      const users = await Users.find(query);
      return exits.success(users);
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
};
