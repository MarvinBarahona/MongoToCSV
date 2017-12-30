/*
  // File name: routes/collection.js
  // Objetive: Sets the router of the collection controller.
*/

// Require:
const express = require('express');
const collectionController = require('../controllers/collection');

// Router object.
const router = express.Router();

// Addsthe routes to the router object.
router.get("/", collectionController.list);

// Exports the router object.
module.exports = router;
