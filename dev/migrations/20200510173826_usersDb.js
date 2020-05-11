
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments()
        tbl.text('username', 128).notNull().unique()
        tbl.text('password', 128).notNull()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
  
};
