exports.up = function (knex) {
    return knex.schema.table("coins", table => {
        table.double("exchange_rate").default(0)
    })
};

exports.down = function (knex) {

};
