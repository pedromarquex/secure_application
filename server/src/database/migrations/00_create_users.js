const knex = require('knex');

async function up(knex) {
    return knex.schema.createTable('messages', table => {
        table.increments('id');
        table.string('from').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('deleted_at');
    });
}

async function down(knex) {
    return knex.schema.dropTable('messages');
}

module.exports = { up, down }