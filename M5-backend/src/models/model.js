import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  }
})

const Example = mongoose.model('Message', exampleSchema);
export default Example;