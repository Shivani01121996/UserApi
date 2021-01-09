// api/controllers/user/signup.js

module.exports = {
  friendlyName: 'User Signup.',
  description: 'User Signup.',
  inputs: {
    name: {
      type: 'string',
      required: true
    },

    age: {
      type: 'number',
      required: true,
    },

    gender: {
      type: 'string',
      required: true,
      isIn: ['MALE', 'FEMALE']
    },

    email: {
      type: 'string',
      isEmail: true,
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

    phoneNumber: {
      type: 'number',
    },
  },
  exits: {
    success: {
      description: 'User Signup.'
    },
    invalid: {
      responseType: 'badRequest',
      description: 'The provided details are invalid.',
      extendedDescription: ''
    },
    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
  },

  fn: async function (inputs, exits) {

    try {
      const userId = sails.helpers.strings.uuid();
      const userQuery = {
        id: userId,
        ...inputs,
      };
      const userDetails = await sails.helpers.user.signup.with(userQuery);
      exits.success(userDetails);
    } catch (err) {
      sails.log.error(err);
      exits.invalid(err);
    }
  },

};


