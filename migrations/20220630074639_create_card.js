/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('cards').then(exists => {
        if (!exists) {

            return knex.schema.createTable('cards', table => {
                table.increments();
                table.integer('type').notNullable();
                table.string('user_card_name', 255)
                table.string('user_card_phone', 255);
                table.string('user_telegram', 255);
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
    return knex.schema.dropTable('cards');
};
