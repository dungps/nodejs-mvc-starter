const bcrypt = require('bcrypt');
const bookshelf = require('./base');

var PasswordReset;

PasswordReset = bookshelf.Model.extend({
  tableName: 'password_resets',

  user: () => {
    return this.belongsTo('User', 'email', 'email');
  }
});

module.exports = bookshelf.model('PasswordReset', PasswordReset);