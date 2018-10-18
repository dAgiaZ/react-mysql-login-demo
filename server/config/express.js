/**
 * Created by adrian on 28/08/2018.
 */


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const config = require('./mysql');

const conf = {
    secret: '076ee61d63aa10a125ea872411e486b9',
    key: 'qazxswedcvfr123'
};


exports.configExpress = (app) => {

    let sessionStore = new MySQLStore(config.configDB);
    app.set('view engine', 'ejs');
    app.locals.pretty = true;

    const logErrors = (err, req, res, next) => {
        console.error(err.stack);
        next(err);
    };

    const clientErrorHandler = (err, req, res, next) => {
        if (req.xhr) {
            res.send(500, {error: 'Something blew up!'});
        } else {
            next(err);
        }
    };

    const errorHandler = (err, req, res, next) => {
        res.status(500);
        res.render('error', {error: err});
    }

    const _applyBodyParser = (fn) => {
        return (req, res, next) => {
                fn(req, res, next);
        }
    }

    app.use(_applyBodyParser(bodyParser.json()));
    app.use(bodyParser.urlencoded());
    app.use(cookieParser()); // required before session.

    app.use(session({
        secret: conf.secret,
        key: conf.key,
        store: sessionStore,
        cookie: {maxAge: 1000 * 60 * 60 * 12}
    }));


    if (app.get('env') === 'development') {
        app.use( (err, req, res, next) => {
            res.status(err.status || 500);
            res.end(err.message);
        });
    }


}
