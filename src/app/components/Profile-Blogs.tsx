import Users from '@/models';
import connectDB from 'config/db';
import BlogPosts from '../lib/blogModel';

export default async function ProfileBlogs({ email }) {
  await connectDB();
  const user = await Users.findOne({ email: email })
    .populate('savedBlogs')
    .select('-password -email');
  console.log(user);
  return (
    <>
      {user.savedBlogs.map((blog) => {
        return <h1 key={blog.id}>{blog.title}</h1>;
      })}
    </>
  );
}
