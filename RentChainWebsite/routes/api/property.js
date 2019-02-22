const express = require('express');
const router = express.Router();

// property Model
const property = require('./../../models/property.js');

// @route   GET api/property
// @desc    Get All property
// @access  Public
router.get('/', (req, res) => {
  property.find()
    .sort({ date: -1 })
    .then(property => res.json(property));
});

// @route   POST api/property
// @desc    Create An property
// @access  Public
router.post('/', (req, res) => {
  const newProperty = new property({
    name: req.body.name
  });

  newProperty.save().then(property => res.json(property));
});

// @route   DELETE api/property/:id
// @desc    Delete A property
// @access  Public
router.delete('/:id', (req, res) => {
  property.findById(req.params.id)
    .then(property => property.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;