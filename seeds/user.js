/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require('bcrypt');

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    return knex('users').del().then(async function () {
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync('a74b1df602d18358af7f6d03360d7060', salt);
        return knex('users').insert([
            {
                full_name: "supper admin Duy Coin",
                password,
                email: 'super_admin@gmail.com',
            },
            {
                full_name: "admin Duy Coin",
                password,
                email: 'admintimebitcrm@gmail.com',
            }
        ])
    })
};
