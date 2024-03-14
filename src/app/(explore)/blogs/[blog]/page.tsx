import connectDB from 'config/db';
import BlogPost from '../../../lib/blogModel';

export default async function Blog({ params }) {
  await connectDB();
  const blog = await BlogPost.findOne({ id: params.blog });
  return <h1>{blog.title}</h1>;
}
