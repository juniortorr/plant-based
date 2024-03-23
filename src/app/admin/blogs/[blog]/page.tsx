import connectDB from 'config/db';
import BlogPost from '../../../lib/blogModel';
import NavWrapper from 'src/app/components/Nav-Wrapper';

export default async function EditBlog({ params }) {
  console.log(params);
  await connectDB();
  const blog = await BlogPost.findOne({ id: params.blog });
  return (
    <>
      <div className="h-16">
        <NavWrapper></NavWrapper>
      </div>
      <h1>{blog.title}</h1>
    </>
  );
}
