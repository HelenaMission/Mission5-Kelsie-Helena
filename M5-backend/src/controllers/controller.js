import { request, response } from 'express';
import Property from '../models/propertyModel.js';

// Helena's
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(404).json({ error: 'Error getting data' });
  }
}

// Kelsie's
