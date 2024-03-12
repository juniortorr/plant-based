import connectDB from 'config/db';
import BlogPosts from '../../lib/blogModel';

export default async function Blogs() {
  await connectDB();
  const posts = await BlogPosts.find();
  return (
    <>
      {posts.map((blog, index) => {
        return (
          <div key={index}>
            <p>{blog.title}</p>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </>
  );
}
