// api/controllers/user/list.js
const DEFAULT_LIST_LIMIT = 100;
const DEFAULT_SORT = '-updatedAt';
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
      type: 'string'
    },
  },

  exits: {
    success: {
      description: 'Returning list of all users.'
    },
  },

  fn: async function (inputs, exits) {

    let response;
    try {
      response = await sails.helpers.user.list.with({ ...inputs });
    } catch (err) {
      logger.error(err);
      throw err;
    }
    return exits.success(response);
  }
};
