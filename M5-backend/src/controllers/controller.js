import { request, response } from 'express';
import Property from '../models/propertyModel.js';
import findMatching from '../services/service.js';
import Service from '../models/serviceModel.js';

// Helena's
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    const imagesWithBase64Images = properties.map((property) => {
      if (property.img) {
        const base64Image = property.img.toString('base64');
        return {
          ...property.toObject(),
          image: base64Image,
        };
      }
    });
    res.status(200).json({ property: imagesWithBase64Images });
  } catch (error) {
    res.status(404).json({ error: 'Error getting data' });
  }
};

export const filterProperties = async (req, res) => {
  const { types, bed, bath, immediate, pet, suburb, priceRange } = req.body;
  try {
    const filter = {
      type: types,
      bed: bed,
      bath: bath,
      immediate: immediate,
      pet: pet,
      address: {
        suburb: suburb,
      },
      price: priceRange,
    };

    const matchingProperties = await findMatching(filter);
    const imagesWithBase64Images = matchingProperties.map((property) => {
      if (property.img) {
        const base64Image = property.img.toString('base64');
        return {
          ...property.toObject(),
          image: base64Image,
        };
      }
    });
    console.log('Matching properties', imagesWithBase64Images);
    res.status(200).json({ property: imagesWithBase64Images });
  } catch (error) {
    console.error('Error in filterProperties', error);
    res.status(500).json({ error: 'Error getting data' });
  }
};

// Kelsie's
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(404).json({ error: 'Error getting data' });
  }
};
