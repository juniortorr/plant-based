'use server';
import passwordValidation from './lib/validators';
import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';
import connectDB from '../../config/db';
import Users from './lib/models';
import { redirect } from 'next/navigation';
const bcrypt = require('bcrypt');
const salt = 10;

export async function handleAddUser(prevState: any, formData: FormData) {
  await connectDB();
  const err = {
    email: null,
    password: null,
  };
  const credentials = {
    id: uuidv4(),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  if (passwordValidation(credentials.password) === false) {
    err.password = true;
    return err;
  }
  const existingUser = await Users.findOne({ email: credentials.email });
  if (!existingUser) {
    const hashedPw = await bcrypt.hash(credentials.password, salt);
    credentials.password = hashedPw;
    await Users.create(credentials);
    console.log('User successfully created!');
    revalidatePath('/signup');
    redirect('/login');
  } else {
    err.email = true;
    return err;
  }
}

export async function handleLogin(prevState, formData: FormData) {
  await connectDB();
  const credentials = { email: formData.get('email'), password: formData.get('password') };
  const existingUser = await Users.findOne({ email: credentials.email });
  if (!existingUser) {
    return 'No user found with this email';
  }
  const isAuthenticated = await bcrypt.compare(credentials.password, existingUser.password);
  if (!isAuthenticated) {
    return 'Incorrect Password';
  }
  return 'Hey there partnah';
}
