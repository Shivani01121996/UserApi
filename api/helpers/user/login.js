// api/helpers/user/create.js

module.exports = {
  friendlyName: 'User Login',
  description: 'User Login',
  inputs: {
    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
  },
  exits: {
    success: {
      description: 'User Login'
    }
  },

  fn: async function (inputs, exits) {
    const { email, password } = inputs;

    try {
      let normalizedEmail = await sails.helpers.utils.normalizeEmail(email);
      const userDetails = await Users.find({ email: normalizedEmail, password });
      exits.success(userDetails);
    } catch (err) {
      sails.log.error(err);
      throw err;
    }
  },

};


