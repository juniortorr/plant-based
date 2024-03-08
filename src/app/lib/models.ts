import { Schema, models, model, Model } from 'mongoose';

interface Person {
  id: string;
  email: string;
  password: string;
}

const schema = new Schema<Person, Model<Person>>({
  id: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default models.Users || model('Users', schema);
