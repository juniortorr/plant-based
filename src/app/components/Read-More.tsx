import BlogPosts from '@/blogModel';
import connectDB from 'config/db';
import { Suspense } from 'react';
import ReadMoreSlider from './Home-Read-More-Slider';
const ReadMore = async () => {
  await connectDB();
  const foundBlogs = await BlogPosts.find().limit(3);
  const blogs = await JSON.parse(JSON.stringify(foundBlogs));

  return (
    <section className="flex flex-col items-center gap-4 overflow-x-hidden bg-green py-10">
      <h2 className="my-5 text-center text-3xl font-bold text-white">
        Read More On <br></br> Our Blog
      </h2>
      <Suspense fallback={<h1>LOADING BUD</h1>}>
        <ReadMoreSlider blogs={blogs} />
      </Suspense>
    </section>
  );
};

export default ReadMore;

// Give a display state to the parent that is based on indexes
// pass the mapped index to each child component along with the state
// if hovered, set the index to be the current child
//
