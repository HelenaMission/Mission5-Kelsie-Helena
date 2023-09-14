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
    img1: {
      type: Buffer,
      require: true,
    },
    img2: {
      type: Buffer,
    },
    img3: {
      type: Buffer,
    },
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
