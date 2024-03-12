import { Schema, models, model, Model } from 'mongoose';

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  savedBlogs: Array<any>;
}

const UserSchema = new Schema<Person, Model<Person>>({
  id: String,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  savedBlogs: [],
});

export default models.Users || model('Users', UserSchema);
