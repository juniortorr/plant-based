'use server';

import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';
import connectDB from '../../config/db';
import Users from './lib/models';
import { notFound, redirect } from 'next/navigation';
const bcrypt = require('bcrypt');
const salt = 10;

export async function handleAddUser(prevState: any, formData: FormData) {
  await connectDB();
  const password = formData.get('password');
  const email = formData.get('email');
  const uniqueId = uuidv4();
  const hashedPw = await bcrypt.hash(password, salt);
  const credentials = { id: uniqueId, email: email, password: hashedPw };
  const existingUser = await Users.findOne({ email: email });
  if (!existingUser) {
    await Users.create(credentials);
    console.log('User successfully created!');
    revalidatePath('/signup');
    redirect('/login');
  }
  return 'There is already a user with this email!';
}

export async function handleLogin(formData) {
  await connectDB();
  const credentials = { username: formData.get('username'), password: formData.get('password') };
  const existingUser = await Users.findOne({ username: credentials.username });
  console.log(existingUser);
  console.log(credentials.password);
  const isAuthenticated = await bcrypt.compare(credentials.password, existingUser.password);
  if (isAuthenticated) {
    console.log('ayo');
  }
}
