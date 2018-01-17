const bcrypt = require('bcrypt');
const bookshelf = require('./base');

var User;

User = bookshelf.Model.extend({
  tableName: 'users',
  hasSecurePassword: true
});

module.exports = bookshelf.model('User', User);