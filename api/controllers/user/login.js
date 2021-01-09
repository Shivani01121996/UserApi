// api/controllers/user/login.js

module.exports = {

  friendlyName: 'User Login.',

  description: '',

  extendedDescription: '',

  inputs: {
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  },

  exits: {
    success: {
      description: 'Successfully authenticated the user.'
    },

    unauthorized: {
      statusCode: 401,
      description: 'The provided details are invalid.',
      extendedDescription: ''
    },
  },

  fn: async function (inputs, exits) {
    try {
      const { email, password } = inputs;
      const userDetails = await sails.helpers.user.login.with({ email, password });
      if (!userDetails) {
        return exits.unauthorized();
      }
      return exits.success(userDetails);
    } catch (err) {
      sails.log.error(err);
      exits.unauthorized(err);
    }
  }
};
