const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const propertySchema = new Schema({
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  },
  Address: {
    type: String,
    required: true,
    max: 40
  },
  Landlord: {
    type: String,
    required: true,
    max: 40
  },
  Tenant: {
    type: String,
    required: true,
    max: 40
  },
  Bedrooms: {
    type: String,
    required: true,
    max: 40
  },
  Vacant: {
    type: String,
    required: true,
  },
  Rent: {
    type: String,
    required: true
  }
});


module.exports = property = mongoose.model('property', propertySchema);
