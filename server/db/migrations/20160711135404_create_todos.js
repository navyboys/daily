exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id').primary();
      table.string('github_id');
      table.string('email');
      table.string('github_user_name');
      table.string('github_access_token');
      table.string('github_profile_url');
      table.timestamps();
    }).createTableIfNotExists('todos', function(table) {
      table.increments('id').primary();
      table.integer('user_id');
      table.string('title');
      table.string('status');
      table.date('due');
      table.timestamps();
      table.index('user_id');
    }).createTableIfNotExists('summaries', function(table) {
      table.increments('id').primary();
      table.integer('user_id');
      table.date('due');
      table.text('description');
      table.timestamps();
      table.index('user_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("users"),
    knex.schema.dropTable("todos"),
    knex.schema.dropTable("summaries")
  ]);
};

// exports.up = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.createTableIfNotExists('users', function(table) {
//       table.increments('id').primary();
//       table.string('name').notNullable();
//       table.string('email').notNullable().unique();
//       table.string('time_zone').defaultTo('Pacific Standard Time').notNullable();
//       table.timestamps().defaultTo(knex.raw('now()')).notNullable();
//     }).createTableIfNotExists('todos', function(table) {
//       table.increments('id').primary();
//       table.integer('user_id').references('users.id');
//       table.string('title').notNullable();
//       table.string('status').defaultTo('open').notNullable();
//       table.date('due').defaultTo(knex.raw('now()')).notNullable();
//       table.timestamps().defaultTo(knex.raw('now()')).notNullable();
//       table.index('user_id');
//     }).createTableIfNotExists('summaries', function(table) {
//       table.increments('id').primary();
//       table.integer('user_id').references('users.id');
//       table.date('due').defaultTo(knex.raw('now()')).notNullable();
//       table.text('description');
//       table.timestamps().defaultTo(knex.raw('now()')).notNullable();
//       table.index('user_id');
//     })
//   ])
// };
//
// exports.down = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.dropTable("users"),
//     knex.schema.dropTable("todos"),
//     knex.schema.dropTable("summaries")
//   ]);
// };
