module.exports = {


  friendlyName: 'Normalize email address.',


  description: 'Normalizes the provided email address string.',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    string: {
      example: 'Foo+one@gmail.com',
      description: 'The candidate email address to validate.',
      required: true,
    },

  },


  exits: {

    success: {
      outputFriendlyName: 'Normalized email address.',
      outputDescription: 'Normalized email address.',
      outputExample: 'foo@gmail.com',
    },

  },


  fn: function(inputs, exits) {

    var Validator = require('validator');
    let normalizedEmail = Validator.normalizeEmail(inputs.string);

    return exits.success(normalizedEmail);
  },



};
