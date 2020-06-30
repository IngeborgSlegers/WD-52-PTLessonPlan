// NODE CHALLENGE 
// LAB TIME


/**********************************************
Node Challenge 3 - Authorized CRUD 
( Sequelize, Express, Jsonwebtoken< validateSession )
**********************************************/

/*
  BRONZE CHALLENGE:
  Implement a validate-session.js. Use the validateSession to protect every route in the animal-controller.js. They should block any request that does not have an authorization header that bears a token. This token should be one returned from the login or sign up methods.

  
  SILVER CHALLENGE:
  Add a new column named 'userId' to the animal model. This column should take integers, and rows and this column should not be null. Reset your database.

  Modify the '/create' endpoint to save the user from the request's id into the userId column.

  Make sure you sign up a new user and add your authorization header before you test.

  GOLD CHALLENGE:
  Taking advantage of the new userId column that links the row of the animal table to the user that posted it from the Silver level challenge, modify the delete endpoint to only allow users to delete only their own animals from the database. You will need to use an options object similar to one used in the Sequelize update() method.

  Similarly, modify the get to return only animals the requesting user has posted.
*/

// ***************************************************************************

// SOLUTION

// BRONZE 
// * validate-session.js
const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, 'Hello I am a secret', (err, decodedToken) => {
        if(!err && decodedToken) {
            User.findOne({ where : { id : decodedToken.id }})
                .then(user => {
                    if(!user) throw 'err';

                    req.user = user;
                    return next();
                })
                .catch(err => res.status(501).json({ error : err }))
        } else {
            return res.status(500).json({ error : 'Unauthorized' })
        }
    });
}

module.exports = validateSession;

// SILVER
// * animal.js

module.exports = function(sequelize, DataTypes){
  return sequelize.define('animal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    legNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    predator: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    // * New
    userId : {
      type : DataTypes.INTEGER,
      allowNull : false
    }
  })
}

// * animal-controller.js
const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Animal = sequelize.import('../models/animal');
// * validateSession is new and all additions where validateSession is a method argument are new
const validateSession = require('../middleware/validate-session');

router.post('/create', validateSession, (req, res) => {
    const newAnimal = {
        name: req.body.name,
        legNumber: req.body.legNumber,
        predator: req.body.predator,
        // * new 
        userId: req.user.id
    }

    Animal.create(newAnimal)
        .then(
            createSuccess = animal => {
                res.status(200).json(animal);
            },

            createFail = err => {
                res.status(500).json({ error: err });
            }
        )
});

router.get('/', validateSession, (req, res) => {
    Animal.findAll({
        // * new
        where: {
            userId: req.user.id
        }
    })
        .then(animals => res.status(200).json(animals))
        .catch(err => res.status(500).json({ error: err }))
});

router.delete('/:id', validateSession, (req, res) => {
    Animal.destroy({
        where: {
            id: req.params.id,
            // * new
            userId: req.user.id
        }
    })
        .then(
            deleteSuccess = recordsChanged => {
                res.status(200).json({ message: `${recordsChanged} record(s) changes.` });
            },

            deleteFail = err => {
                res.status(500).json({ message: 'Failed to delete', error: err })
            }
        )
})

router.put('/update/:id', validateSession, (req, res) => {
    Animal.update(req.body, {
        where: {
            id: req.params.id,
            // * new
            userId: req.user.id
        }
    })
        .then(animal => res.status(200).json(animal))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;