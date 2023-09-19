import Property from '../models/propertyModel.js';
import fs from 'fs';

async function findMatching(filter) {
  try {
    const minPrice = filter.price.min;
    const maxPrice = filter.price.max;
    const types = filter.type;
    const bed = filter.bed;
    const bath = filter.bath;
    console.log('Received filter in findMatching', filter); 

    const query = {
      $and: [
        { price: { $gte: minPrice, $lte: maxPrice } },
        types.length > 0 ? { type: { $in: types } } : {},
        bed.length > 0 ? { bed: { $in: bed } } : {},
        bath.length > 0 ? { bath: { $in: bath } } : {},
        filter.immediate ? { immediate: true } : {},
        filter.pet ? { pet: true } : {},
        filter.address.suburb ? { 'address.suburb': filter.address.suburb } : {},
      ]
    };

    const matchingProperties = await Property.find(query)
    console.log('Matching properties', matchingProperties);
    return matchingProperties;
  } catch (error) {
    console.log('Error in findingMatching', error)
    throw error;
  }
}

export default findMatching;