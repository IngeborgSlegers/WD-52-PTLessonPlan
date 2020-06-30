// DUE: 
//    * NODE MODULES 
//    * WOL Server (it's an assignment)
//    * Assign React Modules

// NODE CHALLENGE 

/**********************************************
Node Challenge 1 - User Auth
( Sequelize, Express, jsonwebtoken, bcrypt )
**********************************************/

/*
Students should clone the repo linked below inside
their blue-badge-challenges folder:
https://github.com/tshelton5000/blue-mon-tues-server-challenge

Make sure they have a database set up with the name:
'blue-server-challenges'.  They need to use their own
un/pw for pgAdmin.
*/

/*
BRONZE DESCRIPTION:
  Design a '/user/create' endpoint that will let the user
  send a new user object through the server to the database. If successful,
  the server should store the user object sent in the database, and send
  a response to the user with a 200 status code and the user
  object just saved.  If the operation fails, the 
  server should respond with a 500 status code and an error
  message back.
  
  Note :: You do not need to use bcrypt.

SILVER DESCRIPTION:
  Complete the bronze level challenge above, but this time 
  create a '/user/login' endpoint that will let the user send
  a user object through the server and check with an existing
  user in the database.  On success, the user object should
  be sent back with an appropriate status code.  On failure,
  an appropriate status code and an error message should be sent.

  Note :: You do not need to use bcrypt.

GOLD DESCRIPTION:
  Complete the silver level challenge above, but make sure
  that passwords are saved encrypted.  When the '/user/create'
  and '/user/login' endpoints send the user information back,
  make sure that information contains a token using
  jwt (this uses the jsonwebtoken dependency).

  Note :: You will modify Bronze and Silver to use bcrypt and implement tokens using jsonwebtoken
*/

// ***************************************************************************

// SOLUTION

const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const User = sequelize.import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Bronze
// router.post('/create', (req, res) => {
//     User.create({
//         username: req.body.username,
//         password: req.body.password
//     })
//         .then(user => {
//             res.status(200).json(user)
//         })
//         .catch(err => res.status(500).json({ error: err }))
// });

// Silver
// router.post('/login', (req, res) => {
//     User.findOne({ where: { username: req.body.username } })
//         .then(user => {
//             res.status(200).json(user);
//         })
//         .catch(err => res.status(500).json({ error : err }))
// })

// GOLD CREATE
router.post('/create', (req, res) => {
    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(user => {
            let token = jwt.sign({ id : user.id }, 'Hello I am a secret', { expiresIn : 60 * 60 * 24 });
            res.status(200).json({
                user : user,
                token : token
            })
        })
        .catch(err => res.status(500).json({ error: err }))
});

// GOLD LOGIN
router.post('/login', (req, res) => {
    User.findOne({ where: { username: req.body.username } })
        .then(user => {
            if(user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if(matches) {
                        let token = jwt.sign({ id : user.id }, 'Hello I am a secret', { expiresIn : 60 * 60 * 24 });
                        res.status(200).json({
                            user : user,
                            token : token
                        });
                    } else {
                        res.status(401).json({ error : 'Username or password did not match. '})
                    }
                })
            }
        })
        .catch(err => res.status(500).json({ error : err }))
})


module.exports = router;