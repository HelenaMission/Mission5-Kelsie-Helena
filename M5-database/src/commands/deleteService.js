import Service from '../models/serviceModel.js';
import { dbDisconnect } from '../db/dbDisconnect.js';

const log = console.log;

export const deleteServiceCmd = async () => {
  try {
    await Service.deleteMany({});
    log('Deleted done');
  } catch (error) {
    error('Error deleting data', error);
  } finally {
    dbDisconnect;
  }
};
