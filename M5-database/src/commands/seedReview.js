import Review from '../models/reviewModel.js';
import path from 'path';
import fs from 'fs';
import { dbDisconnect } from '../db/dbDisconnect.js';

const log = console.log;

export const seedReviewCmd = async () => {
  try {
    const seedingReview = [
      {
        name: "Kelsie", region: "Auckland", national: "New Zealand", rate: "5", review: "The team at Metro property management are fantastic. They are always friendly and helpful. They are quick to respond to any queries and are always willing to go the extra mile to help out. I would highly recommend them to anyone looking for a property manager."      
      },
      {
        name: "Marnie", region: "Auckland", national: "New Zealand", rate: "4.5", review: "I have been renting with Metro Property Management for over 2 years now and I have had nothing but great experiences with them. They are always quick to respond to any queries and are very helpful."
      },
      {
        name: "Jacquie", region: "Auckland", national: "New Zealand", rate: "5", review: "I have been renting with Metro for over 2 years now and I have had nothing but great experiences with them. They are always quick to respond to any queries and are very helpful."
      }
    ]
    await Review.insertMany(seedingReview);
    log('Seeding service data is successful');
  } catch (error) {
    console.error('Seeding service data is failed', error);
  } finally {
    dbDisconnect();
  }
};


