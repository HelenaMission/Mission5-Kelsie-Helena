import mongoose, { Schema } from 'mongoose';

const propertySchema = new Schema({
  price: {
    type: 'string',
    require: true,
  },
  type: {
    type: 'string',
    require: true,
  },
  bath: {
    type: 'string',
    require: true,
  },
  bed: {
    type: 'string',
    require: true,
  },
  address: {
    unit_number: {
      type: 'string',
      require: true,
    },
    street_number: {
      type: 'string',
      require: true,
    },
    street_name: {
      type: 'string',
      require: true,
    },
    suburb: {
      type: 'string',
      require: true,
    },
  },
  img: {
    type: Buffer,
    require: true,
  },
  pet: {
    type: 'boolean',
    require: true,
  },
  parking: {
    type: 'boolean',
    require: true,
  },
  immediate: {
    type: 'boolean',
    require: true,
  },
});

const Property = mongoose.model('properties', propertySchema);

export default Property;
