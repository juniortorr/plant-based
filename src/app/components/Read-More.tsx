import BlogPosts from '@/blogModel';
import connectDB from 'config/db';
import { Suspense } from 'react';
const ReadMore = async () => {
  await connectDB();
  const blogs = await BlogPosts.find().limit(3);
  let i = 1;

  return (
    <section className="flex flex-col items-center gap-4 overflow-x-hidden bg-green py-10">
      <h2 className="my-5 text-center text-3xl font-bold text-white">
        Read More On <br></br> Our Blog
      </h2>
      <Suspense fallback={<h1>LOADING BUD</h1>}>
        <div className="flex gap-3 p-6">
          {blogs.map((blog, index) => {
            return (
              <article key={index} className="flex size-64 items-center justify-center bg-accent">
                <p className="text-xl font-bold text-white">{blog.title}</p>
              </article>
            );
          })}
        </div>
      </Suspense>
      <div className="flex h-2 w-1/2 justify-center rounded-2xl bg-white">
        <div className={` h-full w-1/3 rounded-xl` + (i === 2 ? 'bg-white' : 'bg-black')}></div>
      </div>
    </section>
  );
};

export default ReadMore;

// Give a display state to the parent that is based on indexes
// pass the mapped index to each child component along with the state
// if hovered, set the index to be the current child
//
