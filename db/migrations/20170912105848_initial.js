
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("user", function(table) {
      table.increments("id").primary();
      table.string("username");
      table.string("password");

      table.timestamps();
    }),

    knex.schema.createTable('events', function(table) {
      table.increments('id').primary();
      table.string('date');
      table.string('title');
      table.string('desc');
      table.string('photo');
      table.string('type');
      table.string('expire');

      table.timestamps(true, true);
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("user"),
    knex.schema.dropTable('events'),
  ]);
};
