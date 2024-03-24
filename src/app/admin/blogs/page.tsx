import connectDB from 'config/db';
import BlogPosts from '../../lib/blogModel';
import { handleDeleteBlogAdmin } from 'src/app/(actions)/admin-actions';
import Link from 'next/link';

export default async function Blogs() {
  await connectDB();
  const blogs = await BlogPosts.find();

  return (
    <>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <form
              action={async () => {
                'use server';
                await handleDeleteBlogAdmin(blog.id);
              }}
            >
              <button>Delete</button>
            </form>
            <Link
              href={{
                pathname: `/admin/blogs/${blog.id}`,
              }}
            >
              Edit
            </Link>
          </div>
        );
      })}
    </>
  );
}
