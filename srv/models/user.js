import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  age: String,
  gender: String,
  city: String,
  login: String,
  password: String,
});

export default model('User', userSchema);
