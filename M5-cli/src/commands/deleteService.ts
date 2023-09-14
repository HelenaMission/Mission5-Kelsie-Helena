import Service from '../models/serviceModel';
import { dbDisconnect } from '../db/dbDisconnect';

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
