import * as mongoose from 'mongoose';

export const PugSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
