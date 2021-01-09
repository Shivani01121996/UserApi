// Users.js

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
    },

    age: {
      type: 'number',
    },

    gender: {
      type: 'string',
      required: true,
      isIn: ['MALE', 'FEMALE']
    },

    email: {
      type: 'string',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

    phoneNumber: {
      type: 'number',
      columnType: 'BIGINT',
    },

    role: {
      model: 'UserRoles',
      required: true
    },

  },

};
