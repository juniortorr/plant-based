import connectDB from 'config/db';
import Users from '@/models';
import BlogPosts from '@/blogModel';
import Link from 'next/link';
import React from 'react';
import BlogCard from './Blog-Card';

interface Blog {
  title: 'string';
  id: 'string';
}
interface ProfileBlogsProps {
  email?: string;
  admin?: boolean;
}

const ProfileBlogs = async ({ email, admin }: ProfileBlogsProps) => {
  let blogs;
  await connectDB();

  if (!admin) {
    const user = await Users.findOne({ email: email })
      .populate('savedBlogs')
      .select('-password -email')
      .exec();
    blogs = user.savedBlogs;
  } else {
    blogs = await BlogPosts.find();
  }

  return (
    <>
      <section className="mt-5 flex  flex-col items-center gap-10">
        <h1 className="mt-9 text-center align-top text-2xl font-bold">
          {!admin ? 'Saved Blogs' : 'All Blogs'}
        </h1>
        <div className="flex max-w-3xl flex-wrap justify-center gap-6">
          {blogs.map((post: Blog) => {
            const blog = JSON.parse(JSON.stringify(post));
            return (
              <BlogCard key={blog.id} id={blog.id} title={blog.title} blog={blog} admin={admin} />
            );
          })}
        </div>
        {admin && (
          <Link className="bg-green px-5 py-3 text-white" href={'/admin/create-blog'}>
            Create New Blog
          </Link>
        )}
      </section>
    </>
  );
};

export default ProfileBlogs;
