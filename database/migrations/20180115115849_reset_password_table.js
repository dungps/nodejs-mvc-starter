
exports.up = function(knex, Promise) {
  return knex.schema.createTable('password_resets', (t) => {
    t.charset('utf8');
    t.collate('utf8_unicode_ci');

    t.string('email').index();
    t.string('token').index();
    t.timestamp('created_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('password_resets');
};
