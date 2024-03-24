'use client';

import DeleteBtn from './Delete-Blog-Btn';
import Link from 'next/link';
import { useState } from 'react';
import { handleDeleteBlogClient } from '../(actions)/actions';
import { handleDeleteBlogAdmin } from '../(actions)/admin-actions';
import { revalidatePath } from 'next/cache';

interface BlogCardProps {
  title: string;
  id: string;
  blog?: any;
  admin: any;
}

const BlogCard = ({ title, id, blog, admin }: BlogCardProps) => {
  const [display, setDisplay] = useState('closed');

  const handleDeleteSavedBlog = async () => {
    await handleDeleteBlogClient(blog);
  };

  const handleDeleteFromDatabase = async () => {
    await handleDeleteBlogAdmin(id);
  };

  return (
    <article className="group relative flex size-60 max-w-60 cursor-pointer flex-col items-center justify-center bg-accent/50 p-6 text-center transition duration-300 ease-in-out hover:bg-accent/100 hover:text-white">
      <h3 className="text-xl font-semibold group-hover:hidden">{title}</h3>
      <Link href={`/blogs/${id}`}>
        <button className="mb-2 hidden h-11 w-40 border-2 bg-white/0 text-lg text-white transition duration-300 ease-in-out hover:border-0 hover:bg-green/100 group-hover:block">
          View Post
        </button>
      </Link>
      {admin && (
        <Link href={`/blogs/edit/${id}`}>
          <button className="hidden h-11 w-40 border-2 bg-white/0 text-lg text-white transition duration-300 ease-in-out hover:border-0 hover:bg-green/100 group-hover:block">
            Edit Post
          </button>
        </Link>
      )}
      {display === 'closed' && (
        <DeleteBtn id={id} blog={blog} admin={admin} display={display} setDisplay={setDisplay} />
      )}

      {display === 'open' && (
        <div className="absolute left-0 top-0 z-20 flex size-full flex-col justify-around items-center bg-green text-center text-white p-2">
          <h2>Are you sure you want to delete this blog?</h2>
          <form className="w-5/6" action={handleDeleteSavedBlog}>
            <button className="h-10 w-full bg-accent text-white">Unsave</button>
          </form>

          {admin === true && (
            <form className="w-5/6" action={handleDeleteFromDatabase}>
              <button className="h-10 w-full bg-accent text-white">Delete From Database</button>
            </form>
          )}
          <button
            className="h-10 w-5/6 bg-accent text-white"
            onClick={() => {
              setDisplay(() => 'closed');
            }}
          >
            Return
          </button>
        </div>
      )}
    </article>
  );
};

export default BlogCard;
