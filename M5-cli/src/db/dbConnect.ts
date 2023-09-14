import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27018/mission5');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};
