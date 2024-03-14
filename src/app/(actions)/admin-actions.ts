'use server';

import { revalidatePath } from 'next/cache';
import BlogPosts from '../lib/blogModel';
import { notFound } from 'next/navigation';
import connectDB from 'config/db';

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
  try {
    // await connectDB();
    const data = {
      title: formData.get('title'),
      date: formData.get('date'),
      content: formData.get('content'),
    };
    console.log(data);
    return 'success!';
  } catch (e) {
    console.log(e);
    return e;
  }
}
