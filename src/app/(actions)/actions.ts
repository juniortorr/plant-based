'use server';

import passwordValidation from '../lib/validators';
import { v4 as uuidv4 } from 'uuid';
import connectDB from '../../../config/db';
import Users from '../lib/models';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { SignJWT } from 'jose';
import seedDb from '../lib/seedBlogs';

const bcrypt = require('bcrypt');
const salt = 10;

export async function handleAddUser(prevState: any, formData: FormData) {
  let confirmUser = false;
  try {
    await connectDB();
    const err = {
      email: null,
      password: null,
    };
    const credentials = {
      id: uuidv4(),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
      savedBlogs: [],
    };
    if (passwordValidation(credentials.password) === false) {
      err.password = true;
      return err;
    }
    const existingUser = await Users.findOne({ email: credentials.email });
    if (!existingUser) {
      confirmUser = true;
      const hashedPw = await bcrypt.hash(credentials.password, salt);
      credentials.password = hashedPw;
      await Users.create(credentials);
      await seedDb();
      console.log('User successfully created!');
    } else {
      err.email = true;
      return err;
    }
  } catch (e) {
    console.log(e);
  }
  if (confirmUser === true) {
    redirect('/login');
  }
}

export async function handleLogin(prevState, formData: FormData) {
  try {
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
    const secret = new TextEncoder().encode(process.env.SECRET);
    const oneDay = 24 * 60 * 60 * 1000;
    const alg = 'HS256';
    const userInfo = {
      id: existingUser.id,
      email: existingUser.email,
      firstName: existingUser.firstName,
    };
    const jwt = await new SignJWT(userInfo).setProtectedHeader({ alg }).sign(secret);
    cookies().set({ name: 'auth', value: jwt, expires: Date.now() + oneDay, httpOnly: true });
    redirect('/profile');
  } catch (e) {
    console.log(e);
  }
}

export async function handleLogout() {
  const cookie = cookies().get('auth');
  if (cookie) {
    cookies().delete('auth');
    console.log('logged out successfully');
  }
  redirect('/login');
}
