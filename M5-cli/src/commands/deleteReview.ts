import Review from '../models/reviewModel';
import { dbDisconnect } from '../db/dbDisconnect';

const log = console.log;

export const deleteReviewCmd = async () => {
  try {
    await Review.deleteMany({});
    log('Deleted done');
  } catch (error) {
    error('Error deleting data', error);
  } finally {
    dbDisconnect;
  }
};
