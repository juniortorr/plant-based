import { Schema, models, model, Model } from 'mongoose';

interface Blog {
  id: string;
  date: Date;
  title: string;
  body: string;
  private: boolean;
}

const BlogSchema = new Schema<Blog, Model<Blog>>({
  id: String,
  date: Date,
  title: String,
  body: String,
  private: Boolean,
});

export default models.BlogPosts || model('BlogPosts', BlogSchema);
