import { Schema, models, model, Model } from 'mongoose';
import { string } from 'zod';

interface Section {
  subheading: string;
  paragraphs: Array<String>;
}

interface Blog {
  id: string;
  title: string;
  date: string;
  sections: Array<{ subheading: string; paragraphs: Array<string> }>;
  private: boolean;
}

const BlogSchema = new Schema<Blog, Model<Blog>>({
  id: String,
  title: String,
  date: String,
  sections: Array,
  private: Boolean,
});

export default models.BlogPosts || model('BlogPosts', BlogSchema);
