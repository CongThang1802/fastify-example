/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('coins').then(exists => {
        if (!exists) {

            return knex.schema.createTable('coins', table => {
                table.increments();
                table.string('code', 255).notNullable();
                table.string('name', 255).notNullable();
                table.string('avatar', 255).nullable();
                table.string('network', 255)
                table.integer('sell').notNullable();
                table.integer('buy').notNullable();
                table.timestamp('created_at').defaultTo(knex.fn.now())
                table.timestamp('updated_at').defaultTo(knex.fn.now())
            });
        }
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('coins');
};
