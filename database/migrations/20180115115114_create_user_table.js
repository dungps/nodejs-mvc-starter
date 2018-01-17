
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.charset('utf8');
    t.collate('utf8_unicode_ci');

    t.increments('id');
    t.string('name');
    t.string('email');
    t.string('password_digest');
    t.string('role');
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
