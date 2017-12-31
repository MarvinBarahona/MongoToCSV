/*
  // File name: routes/index.js
  // Objective: Joins all the routes.
*/

// Require:
const express = require('express');
const collectionRoutes = require('./collection');

// Router object.
const router = express.Router();

// Set a dummy route to say hello at the home page.
router.get('/', (request, response)=>{
  response.status(200).json({grettings: 'Hello there!'})
});

// Set the collections routes to the "/collections" main route.
router.use('/collections', collectionRoutes);

// Export the router.
module.exports = router;
