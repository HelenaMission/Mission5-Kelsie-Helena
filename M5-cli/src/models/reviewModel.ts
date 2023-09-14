import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema({
  name: {
    type: "string",
    require: true,
  },
  region: {
    type: "string",
    require: true,
  },
  national: {
    type: "string",
    require: true,
  },
  rate: {
    type: "string",
    require: true,
  },
  review: {
    type: "string",
    require: true,
  },
  })

const Review = mongoose.model('reviews', reviewSchema);

export default Review;