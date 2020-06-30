// NODE CHALLENGE 

/**********************************************
Node Challenge 2 - Unauthorized CRUD 
( Sequelize, Express, CRUD )
**********************************************/

/*
  BRONZE CHALLENGE:
  Make a new '/create' endpoint in the animal-controller file.  It should save all the data from the animal model to the database, including # of legs, boolean predator value, and its name.
  If the animal is correctly saved in the database, inform the user. Otherwise, alert the user if there's an error.
  Make another '/' endpoint that will return all the animals created in the database. Like the others, send appropriate statuses based on if the request succeeds or not.

  SILVER CHALLENGE:
  Complete the bronze challenge, then make a new '/delete' endpoint that will delete an animal from the database.  
  However you complete this challenge, a request must be able to specify which animal needs to be deleted.  
  If the delete was successful, inform the user, otherwise alert the user to an error.

  GOLD CHALLENGE:
  Complete the silver challenge, but make a new '/update' endpoint that will let a request update animal data in the database.  
  Like with the silver challenge, the request must be able to specify which animal needs to be updated.  On success, inform the user, on failure, alert appropriately.
*/

// ***************************************************************************

// SOLUTION

/* * Route needs to be added to index.js
  const animal = require('./controllers/animal-controller');
  app.use('/animal', animal);
*/

// * router
const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Animal = sequelize.import('../models/animal');

// Bronze
router.post('/create', (req, res) => {
  Animal.create({
    name: req.body.name,
    legNumber: req.body.legNumber,
    predator: req.body.predator
  })
    .then(
      createSuccess = animal => {
        res.status(200).json(animal);
      },

      createFail = err => {
        res.status(500).json({ error: err });
      }
    );
});

router.get('/', (req, res) => {
  Animal.findAll()
    .then(animals => res.status(200).json(animals))
    .catch(err => res.status(500).json({ error: err }))
})

// Silver
router.delete('/:id', (req, res) => {
  Animal.destroy({ where: { id: req.params.id } })
    .then(
      deleteSuccess = recordsChanged => {
        res.status(200).json({ message: `${recordsChanged} record(s) deleted.` })
      },

      deleteFail = err => {
        res.status(500).json({ message: 'Failed to delete', error: err })
      }
    );
});

// Gold
router.put('/:id', (req, res) => {
  Animal.update({
    name: req.body.name,
    legNumber: req.body.legNumber,
    predator: req.body.predator
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(
      updateSuccess = recordsChanged => {
        res.status(200).json({ message: 'Animal Updated' })
      },

      updateFail = err => {
        res.status(500).json({ message: 'Update failed', error: err })
      }
    )
})

module.exports = router;