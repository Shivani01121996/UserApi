// api/helpers/user/create.js

module.exports = {
  friendlyName: 'Get user role',
  description: 'if fisrt login then admin role, otherwise user',
  inputs: {},
  exits: {
    success: {
      description: 'found role'
    }
  },

  fn: async function (inputs, exits) {
    const { email, password } = inputs;

    try {
      const userRole;
      const userList = await Users.find();
      if (userList.length) {
        userRole = await UserRoles.find({ name: 'USER' });
      }
      else {
        userRole = await UserRoles.find({ name: 'ADMIN' });
      }
      exits.success(userRole.id);
    } catch (err) {
      sails.log.error(err);
      throw err;
    }
  },

};


