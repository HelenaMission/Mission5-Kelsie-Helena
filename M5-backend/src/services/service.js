import Property from '../models/propertyModel.js';

async function findMatching(filter) {
  const matchingProperties = await Property.find(filter);
  console.log(matchingProperties)
  return matchingProperties;
}

export default findMatching;