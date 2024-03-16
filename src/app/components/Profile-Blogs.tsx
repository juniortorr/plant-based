import connectDB from 'config/db';
import Users from '@/models';
import Link from 'next/link';

interface Blog {
  title: 'string';
  id: 'string';
}

export default async function ProfileBlogs({ email }) {
  await connectDB();

  const user = await Users.findOne({ email: email })
    .populate('savedBlogs')
    .select('-password -email')
    .exec();

  return (
    <section className="mt-5 flex  flex-col items-center gap-10">
      <h1 className="mt-9 text-center align-top text-2xl font-bold">Saved Blogs</h1>
      <div className="flex max-w-3xl flex-wrap justify-center gap-6">
        {user.savedBlogs.map((blog: Blog) => {
          return (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <article className="flex size-60 max-w-60 cursor-pointer items-center justify-center bg-accent/50 p-6 text-center transition duration-300 ease-in-out hover:bg-accent/100 hover:text-white">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
