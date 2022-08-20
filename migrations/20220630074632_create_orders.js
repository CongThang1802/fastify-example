/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('orders').then(exists => {
        if (!exists) {

            return knex.schema.createTable('orders', table => {
                table.increments();
                table.integer('coin_id').unsigned().notNullable();
                table.string('order_id', 255).notNullable()
                table.string('user_phone', 255)
                table.string('network', 255)
                table.string('bank', 255)
                table.integer('total_money')
                table.integer('amount').notNullable()
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
    return knex.schema.dropTable('orders');
};
