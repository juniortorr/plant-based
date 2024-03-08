import { Schema, models, model } from 'mongoose';

interface Person {
  username: string;
}

const schema = new Schema({
  username: String,
  password: String,
});

console.log('hello');

export default models.Users || model('Users', schema);
