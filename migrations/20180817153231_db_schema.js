exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('orders', function (order) {
      order.increments('id').primary();
      order.specificType('meals', 'VARCHAR[100]');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('orders'),
  ]);
};
