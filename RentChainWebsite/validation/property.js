const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePropertyInput(data) {
  let errors = {};

  data.address = !isEmpty(data.address) ? address.name : '';
  data.landlord = !isEmpty(data.landlord) ? data.landlord : '';
  data.tenant = !isEmpty(data.tenant) ? data.tenant : '';
  data.bedrooms = !isEmpty(data.bedrooms) ? data.bedrooms : '';
  data.rent = !isEmpty(data.rent) ? data.rent : '';

  if (!Validator.isLength(data.address, { min: 2, max: 40 })) {
    errors.address = 'Address needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.landlord)) {
    errors.landlord = 'Profile Name is required';
  }

  if (Validator.isEmpty(data.tenant)) {
    errors.tenant = 'Tenant is required';
  }

  if (Validator.isEmpty(data.bedrooms)) {
    errors.bedrooms = 'Bedrooms field is required';
  }

  if (Validator.isEmpty(data.rent)) {
    errors.rent = 'Rent field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
