// UserRoles.js

module.exports = {

  attributes: {

    id: {
      type: 'string',
      required: true,
      unique: true,
      isUUID: true,
      columnType: 'uuid'
    },

    name: {
      type: 'string',
      required: true,
      isIn: ['ADMIN', 'USER']
    },

    user: {
      collection: 'Users',
      via: 'role'
    },

  },

};
