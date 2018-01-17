const dbConfig = require('../../../knexfile.js');
const _ =  require('knex');
const knex = require('knex');
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');

// init bookshelf
let appBookshelf = bookshelf(knex(dbConfig));

// register bookshelf plugins
appBookshelf.plugin('registry');
appBookshelf.plugin('pagination');
appBookshelf.plugin(securePassword);

appBookshelf.Model = appBookshelf.Model.extend({
  hasTimestamps: true
});

module.exports = appBookshelf;