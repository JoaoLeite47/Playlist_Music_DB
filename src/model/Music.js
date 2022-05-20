import mongoose from 'mongoose';

export const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  linkImage: {
    type: String,
    required: true,
  },
  linkMusic: {
    type: String,
    required: true,
  },
});
