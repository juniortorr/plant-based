import connectDB from 'config/db';
import BlogPosts from '../../lib/blogModel';
import Link from 'next/link';
import SharedHeader from 'src/app/components/Header-Shared';
import { cookies } from 'next/headers';
import { saveBlog } from 'src/app/(actions)/actions';

export default async function Blogs() {
  await connectDB();
  const auth = cookies().get('auth');
  const blogs = await BlogPosts.find();
  const posts = await JSON.parse(JSON.stringify(blogs));
  return (
    <>
      <SharedHeader title={'Blogs'} />
      <main className="mx-auto  flex flex-wrap justify-center gap-3 py-10">
        {posts.map((blog) => {
          if (blog.private === false) {
            return (
              <div
                className="group flex size-64 flex-col justify-center gap-2 bg-accent/50 text-center transition-all duration-300 ease-linear hover:bg-accent/100"
                key={blog.id}
              >
                <p className="text-xl font-bold transition-all  duration-300 ease-linear group-hover:hidden group-hover:opacity-0">
                  {blog.title}
                </p>
                <button className="mx-auto hidden h-10 w-4/5 bg-green text-lg font-semibold text-white transition-all  duration-150 ease-linear hover:bg-white hover:text-green group-hover:block">
                  <Link href={{ pathname: `/blogs/${blog.id}` }}>Read Blog</Link>
                </button>
                {auth && (
                  <form
                    action={async () => {
                      'use server';
                      saveBlog(blog);
                    }}
                  >
                    <button className="mx-auto hidden h-10 w-4/5 bg-green text-lg font-semibold text-white transition-all  duration-150 ease-linear hover:bg-white  hover:text-green group-hover:block">
                      Save Blog
                    </button>
                  </form>
                )}
              </div>
            );
          }
        })}
      </main>
    </>
  );
}
