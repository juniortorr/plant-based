'use server';

import { revalidatePath } from 'next/cache';
import BlogPosts from '../lib/blogModel';
import { notFound, redirect } from 'next/navigation';
import connectDB from 'config/db';
import { v4 as uuidv4 } from 'uuid';

export async function handleDeleteBlogAdmin(id: string) {
  try {
    await connectDB();
    await BlogPosts.findOneAndDelete({ id: id });
    console.log('Blog Deletion Success');
  } catch (e) {
    console.log(e);
    notFound();
  }
  revalidatePath('/admin');
  revalidatePath('/blogs');
  revalidatePath('/profile');
}

export async function handleCreateBlog(formState) {
  const data = { id: uuidv4(), ...formState, private: false };
  console.log(data.sections);
  try {
    await connectDB();
    await BlogPosts.create(data);
    console.log('Blog Creation Success!');
    revalidatePath('/admin/blogs');
  } catch (e) {
    console.log(e);
    notFound();
  }
  redirect('/admin');
}

export async function handleUpdateBlog(blog, formState) {
  let success = false;
  try {
    await connectDB();
    await BlogPosts.findOneAndReplace({ id: blog.id }, { ...formState });
    success = true;
  } catch (e) {
    console.log(e);
  }
  redirect('/admin');
}
