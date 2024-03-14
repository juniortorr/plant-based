import { Schema, models, model, Model } from 'mongoose';

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  savedBlogs: Array<any>;
  admin: boolean;
}

const UserSchema = new Schema<Person, Model<Person>>({
  id: String,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  savedBlogs: [],
  admin: { type: Boolean, default: false },
});

export default models.Users || model('Users', UserSchema);
