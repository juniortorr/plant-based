import { Schema, models, model, Model } from 'mongoose';

interface Blog {
  id: string;
  date: string;
  title: string;
  content: string;
  private: boolean;
}

const BlogSchema = new Schema<Blog, Model<Blog>>({
  id: String,
  date: String,
  title: String,
  content: String,
  private: Boolean,
});

export default models.BlogPosts || model('BlogPosts', BlogSchema);
