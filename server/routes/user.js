'use strict';
const passport = require('passport');
const auth     = require('../models/user');
const userController = require('../controllers/user');

const register = (router) => {

    router.post('/login', (req, res, next) => {

        passport.authenticate('local', (err, user) => {
            console.log(err);
            if (err) {return res.status(403).json({err: err, authUser: user}); }
            if (!user) { return res.status(403).json({err: err, authUser: user}); }
            req.logIn(user, (err) => {
                if (err) { return res.status(403).json({err: err, authUser: user}); }
                res.status(200).json({err: null, authUser: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    fullname: user.fullname,
                    created_at: user.created_at,
                    modified_at: user.modified_at
                }});
            });
        })(req, res, next);
    });


    router.get('/logout', (req, res) =>{
        req.session.destroy()
        req.logout();
        res.status(200).json({err: null, authUser: {}})
    });

}


module.exports = register;
