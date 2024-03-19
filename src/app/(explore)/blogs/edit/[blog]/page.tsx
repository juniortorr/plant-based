import connectDB from 'config/db';
import BlogPosts from '@/blogModel';

import CreateBlog from 'src/app/admin/create-blog/page';

const EditBlog = async ({ params }) => {
  await connectDB();
  const blog = await BlogPosts.findOne({ id: params.blog }).select('-_id -__v');
  const blogCopy = JSON.parse(JSON.stringify(blog));
  return <CreateBlog blog={blogCopy} />;
};

export default EditBlog;
