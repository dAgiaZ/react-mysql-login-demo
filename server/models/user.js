'use strict';

const mysql = require('mysql');
const config = require('../config/mysql');

const connection = mysql.createConnection(config.configDB);


const _login = (email, password, done) => {
    connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'", (err, rows) => {
        if (err)
            return done(err);
        if (!rows.length) {
            return done({loginMessage: 'Invalid email or password.'});
        }
        if (!( rows[0].password == password))
            return done({loginMessage: 'Invalid email or password.'});

        return done(null, rows[0]);

    });
}

const _getUserById = (id, done) => {
    connection.query("SELECT * FROM `users` WHERE `id` = '" + id + "'", (err, rows) => {
        if (err)
            return done(err);
        if (!rows.length) {
            return done({loginMessage: 'User not found.'});
        }
        return done(null, rows[0]);

    });
}


module.exports.login = _login;
module.exports.getUserById = _getUserById;