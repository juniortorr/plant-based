'use server';

import connectDB from '../../config/db';
import Users from './lib/models';
import { notFound } from 'next/navigation';
const bcrypt = require('bcrypt');
const salt = 10;

export async function handleAddUser(formData) {
  await connectDB();
  const password = formData.get('password');
  const username = formData.get('username');
  const hashedPw = await bcrypt.hash(password, salt);
  const credentials = { username: username, password: hashedPw };
  try {
    await Users.create(credentials);
    console.log('User successfully created!');
  } catch (e) {
    console.log(e);
  }
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
