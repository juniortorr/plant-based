'use server';

import { revalidatePath } from 'next/cache';
import BlogPosts from '../lib/blogModel';
import { notFound } from 'next/navigation';
import connectDB from 'config/db';
import { v4 as uuidv4 } from 'uuid';

export async function handleDeleteBlog(id: string) {
  try {
    await connectDB();
    await BlogPosts.findOneAndDelete({ id: id });
    console.log('Blog Deletion Success');
    revalidatePath('/admin/blogs');
  } catch (e) {
    console.log(e);
    notFound();
  }
}

export async function handleCreateBlog(prevState: any, formData: FormData) {
  const data = {
    id: uuidv4(),
    date: formData.get('date'),
    title: formData.get('title'),
    content: formData.get('content'),
    private: false,
  };
  console.log(data);
  try {
    await connectDB();
    await BlogPosts.create(data);
    revalidatePath('/blogs');
    revalidatePath('/admin/blogs');
    return 'success!';
  } catch (e) {
    console.log(e);
    return e;
  }
}
