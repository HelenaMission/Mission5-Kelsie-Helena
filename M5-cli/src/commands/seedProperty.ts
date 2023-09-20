import Property from '../models/propertyModel';
import path from 'path';
import fs from 'fs';
import { dbDisconnect } from '../db/dbDisconnect';

const log = console.log;
// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);

export const seedPropertyCmd = async () => {
  try {
    const seedingProperty = [
      {
        price: 480,
        type: 'House',
        bed: 2,
        bath: 1.5,
        address: { street_number: 35, street_name: 'Morihana Close', suburb: 'Glen Eden' },
        img: {
          img1: readFile('35_morihana_close_gleneden_2bd_1.5bt_$480.jpg'),
          img2: readFile('35_morihana_close_2_1.jpg'),
          img3: readFile('35_morihana_close_3_1.jpg'),
        },
        pet: true,
        parking: true,
        immediate: true,
      },
      {
        price: 560,
        type: 'Townhouse',
        bed: 2,
        bath: 1,
        address: { street_number: 14, street_name: 'Omana Road', suburb: 'Milford' },
        img: {
          img1: readFile('14_omana_rd_milford_2bd_1bt_$560.jpg'),
          img2: readFile('14_omana_rd_2_1.jpg'),
          img3: readFile('14_omana_rd_3_1.jpg'),
        },
        pet: false,
        parking: true,
        immediate: false,
      },
      {
        price: 530,
        type: 'Unit',
        bed: 2,
        bath: 1,
        address: { unit_number: 2, street_number: 216, street_name: 'Edmonton Road', suburb: 'Te Atatu' },
        img: { img1: readFile('2_216_edmonton_rd_teatatu_2bd_1bt_$530.jpg') },
        pet: true,
        parking: true,
        immediate: true,
      },
      {
        price: 720,
        type: 'House',
        bed: 3,
        bath: 1,
        address: { street_number: 7, street_name: 'Cutler Street', suburb: 'New Lynn' },
        img: { img1: readFile('7_cutler_st_newlynn_3bd_1bt_$720.jpg') },
        pet: true,
        parking: true,
        immediate: true,
      },
      {
        price: 980,
        type: 'Townhouse',
        bed: 3,
        bath: 2,
        address: { street_number: 16, street_name: 'Stanley Avenue', suburb: 'Milford' },
        img: { img1: readFile('16_stanley_ave_milford_3bd_2bt_$980.jpg') },
        pet: false,
        parking: true,
        immediate: false,
      },
      {
        price: 730,
        type: 'House',
        bed: 3,
        bath: 1,
        address: { street_number: 37, street_name: 'Bracken Avenue', suburb: 'Takapuna' },
        img: { img1: readFile('37_bracken_ave_takapuna_3bd_1bt_$730.jpg') },
        pet: true,
        parking: true,
        immediate: false,
      },
      {
        price: 850,
        type: 'Apartment',
        bed: 4,
        bath: 1,
        address: { street_number: 40, street_name: 'Alverston Street', suburb: 'Waterview' },
        img: { img1: readFile('40_alverston_st_waterview_4bd_1bt_$850.jpg') },
        pet: false,
        parking: false,
        immediate: true,
      },
      {
        price: 400,
        type: 'Apartment',
        bed: 1,
        bath: 1,
        address: { unit_number: 701, street_number: 76, street_name: 'Grange Street', suburb: 'City Central' },
        img: { img1: readFile('701_76_grange_st_citycentral_1bd_1bt_$400.jpg') },
        pet: false,
        parking: false,
        immediate: true,
      },
      {
        price: 530,
        type: 'House',
        bed: 2,
        bath: 1,
        address: { street_number: 33, street_name: 'Serene Place', suburb: 'Gulf Harbour' },
        img: { img1: readFile('33_serene_pl_gulfharbour_2bd_1bt_$530.jpg') },
        pet: true,
        parking: true,
        immediate: true,
      },
    ];
    await Property.insertMany(seedingProperty);
    log('Seeding property data is successful');
  } catch (error) {
    console.error('Seeding property data is failed', error);
  } finally {
    dbDisconnect();
  }
};

function readFile(file: string) {
  const imagesDir = path.join(__dirname, '..', 'images');
  const filePath = path.join(imagesDir, file);
  return fs.readFileSync(filePath);
}
