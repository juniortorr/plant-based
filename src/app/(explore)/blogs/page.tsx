import connectDB from 'config/db';
import BlogPosts from '../../lib/blogModel';
import Link from 'next/link';

export default async function Blogs() {
  await connectDB();
  const posts = await BlogPosts.find();
  return (
    <>
      {posts.map((blog) => {
        // if (blog.private === true) {
        //   return <h1 key={blog.id}>Private</h1>;
        // }
        return (
          <div key={blog.id}>
            <p>{blog.title}</p>
            <p>{blog.body}</p>
            <button>
              <Link href={{ pathname: `/blogs/${blog.id}` }}>Read Blog</Link>
            </button>
          </div>
        );
      })}
    </>
  );
}
