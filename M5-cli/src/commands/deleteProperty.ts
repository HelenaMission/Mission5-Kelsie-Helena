import Property from '../models/propertyModel';
import { dbDisconnect } from '../db/dbDisconnect';

const log = console.log;

export const deletePropertyCmd = async () => {
  try {
    await Property.deleteMany({});
    log('Deleted done');
  } catch (error) {
    error('Error deleting data', error);
  } finally {
    dbDisconnect;
  }
};
