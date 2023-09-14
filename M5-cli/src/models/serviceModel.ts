import mongoose, { Schema } from 'mongoose';

const serviceSchema = new Schema({
  icons: {
    type: Buffer,  
    require: true,
  },
  service: {
    type: "string",
    require: true,
  },
  description: {
    type: "string",
    require: true,
  },
  button: {
    type: "string",
    require: true,
  },
})
  
const Service = mongoose.model('services', serviceSchema);

export default Service;