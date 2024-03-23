import connectDB from 'config/db';
import BlogPost from '../../../lib/blogModel';
import SharedHeader from 'src/app/components/Shared-Header';
import BlogContent from 'src/app/components/Blog-Content';

export default async function Blog({ params }) {
  await connectDB();
  const blog = await BlogPost.findOne({ id: params.blog });
  console.log(blog);
  return (
    <div>
      <SharedHeader title={blog.title} />
      <main>
        {blog.sections.map((section, index) => {
          return <BlogContent key={index} section={section} />;
        })}
      </main>
    </div>
  );
}
