import mongoose from 'mongoose';

export const dbDisconnect = () => mongoose.disconnect();
