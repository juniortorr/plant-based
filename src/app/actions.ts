'use server';

import connectDB from '../../config/db';
import User from './lib/models';
import { notFound } from 'next/navigation';
const bcrypt = require('bcrypt');
const salt = 10;

export async function handleAddUser(formData) {
  const password = formData.get('password');
  const username = formData.get('username');
  const hashedPw = await bcrypt.hash(password, salt);
  const credentials = { username: username, password: hashedPw };
  await User.create(credentials);
}

export async function handleLogin(formData) {
  await connectDB();
  const credentials = { username: formData.get('username'), password: formData.get('password') };
  const existingUser = await User.findOne({ username: credentials.username });
  if (!existingUser) return notFound();
  const isAuthenticated = await bcrypt.compare(credentials.password, existingUser.password);
  if (isAuthenticated) {
    console.log('ayo');
  }
}
