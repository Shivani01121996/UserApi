// api/controllers/user/signup.js

module.exports = {

  friendlyName: 'Signup.',

  description: '',

  extendedDescription: '',

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
      description: 'Signed Up.'
    },

    emailAlreadyInUse: {
      description: 'The provided email address is already in use.'
    },
  },

  fn: async function (inputs, exits) {
    try {
      const { name, age, gender, email, password, phoneNumber } = inputs;

      // 1. Check if email already exists.
      let normalizedEmail = sails.helpers.utils.normalizeEmail(email);
      const userDetails = await Users.find({ email: normalizedEmail });

      // 2. if EMAIL_ALREADY_IN_USE return
      if (userDetails) {
        let e = {
          code: 'EMAIL_ALREADY_IN_USE',
          message: 'The provided email address is already in use.'
        };
        return exits.emailAlreadyInUse(e);
      }

      const userRole = await sails.helpers.user.getRole();

      // 3. create user
      userDetails = await Users.create({
        id: sails.helpers.strings.uuid(),
        name, age, gender, email, password, phoneNumber, role: userRole
      });

      return exits.success(userDetails);
    } catch (err) {
      sails.log.error(err);
      throw err;
    }
  }
};
