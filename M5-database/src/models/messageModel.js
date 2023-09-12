import mongoose, { Schema } from 'mongoose';

const initialSchema = new Schema({
  
});

const Message = mongoose.model('Message', initialSchema);

export default Message;
