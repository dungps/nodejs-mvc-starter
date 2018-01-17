const UserModel = require('../../server/models/user');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return new UserModel({
    name: process.env.APP_ADMIN_NAME,
    email: process.env.APP_ADMIN_EMAIL,
    password: process.env.APP_ADMIN_PASSWORD,
    role: 'admin'
  }).save();
};
