import { request, response } from 'express';
import Example from '../models/model.js';

export const controller = (request, response) => {
  try {
    response.send('hello from controller');
  } catch (error) {
    console.log(error);
  }
}
