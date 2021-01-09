const fs = require('fs');
const emailDirs = ['/../data/emails'];
const ALL_EMAILS = {};
/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {
  // Since the hard-coded data version has been incremented, and we're running in
  // a "throwaway data" environment, delete all records from all models.
  for (let identity in sails.models) {
    await sails.models[identity].destroy({});
  } //∞

  // By convention, this is a good place to set up fake data during development.

  // CREATE: User Roles
  const userRoles = await sails.helpers.fs.readJson('data/userRoles.json');
  await UserRoles.createEach(userRoles);

  // CREATE: Users
  const users = await sails.helpers.fs.readJson('data/users.json');
  await Users.createEach(users);
};
