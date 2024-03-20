import connectDB from 'config/db';
import BlogPosts from '../../lib/blogModel';
import Link from 'next/link';
import SharedHeader from 'src/app/components/Header-Shared';
import BlogCard from 'src/app/components/Blog-Card';
import { cookies } from 'next/headers';
import { decryptJWT } from 'src/app/lib/auth';
import Users from '@/models';
import { revalidatePath } from 'next/cache';
import { saveBlog } from 'src/app/(actions)/actions';

export default async function Blogs() {
  await connectDB();
  const auth = cookies().get('auth');
  const blogs = await BlogPosts.find();
  const posts = await JSON.parse(JSON.stringify(blogs));
  return (
    <>
      <SharedHeader title={'Blogs'} />
      <main className="mx-auto mt-5 flex flex-wrap justify-center gap-3">
        {posts.map((blog) => {
          // if (blog.private === true) {
          //   return <h1 key={blog.id}>Private</h1>;
          // }
          return (
            <div
              className="group flex size-64 flex-col justify-center gap-2 bg-accent/50 text-center"
              key={blog.id}
            >
              <p className="text-xl font-bold group-hover:hidden">{blog.title}</p>
              <button className="mx-auto hidden h-10 w-4/5 bg-green text-lg font-semibold text-white group-hover:block">
                <Link href={{ pathname: `/blogs/${blog.id}` }}>Read Blog</Link>
              </button>
              {auth && (
                <form
                  action={async () => {
                    'use server';
                    saveBlog(blog);
                  }}
                >
                  <button className="mx-auto hidden h-10 w-4/5 bg-green text-lg font-semibold text-white group-hover:block">
                    Save Blog
                  </button>
                </form>
              )}
            </div>
          );
        })}
      </main>
    </>
  );
}

// we would need to decode the information
// we would have to find the user
// push the object ID onto the saved blogs
