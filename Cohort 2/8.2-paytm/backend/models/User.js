const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
  firstName: string,
  lastName: string,
  password: string,
});
export const User = mongoose.model('User', UserSchema);
