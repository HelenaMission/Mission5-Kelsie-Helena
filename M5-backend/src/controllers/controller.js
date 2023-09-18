import { request, response } from 'express';
import Property from '../models/propertyModel.js';
import findMatching from '../services/service.js';
import Service from "../models/serviceModel.js";


// Helena's
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(404).json({ error: "Error getting data" });
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
      price: {
        $gt: priceRange.min,
        $lt: priceRange.max,
      },
    };

    console.log('Received filter', filter);
    const matchingProperties = await findMatching(filter);
    console.log('Matching properties', matchingProperties);
    
    res.status(200).json(matchingProperties);
  } catch (error) {
    res.status(500).json({ error: 'Error getting data' });
  }
}

// Kelsie's
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(404).json({ error: "Error getting data" });
  }
};
