'use server';

import passwordValidation from '../lib/validators';
import { v4 as uuidv4 } from 'uuid';
import connectDB from '../../../config/db';
import Users from '../lib/models';
import { RedirectType, redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { SignJWT } from 'jose';
import seedDb from '../lib/seedBlogs';
import { userSchema } from '../lib/validators';
import { getCredentials, initializeErrors } from '../lib/credentials-helpers';

const bcrypt = require('bcrypt');
const salt = 10;

export async function handleAddUser(prevState: any, formData: FormData) {
  let confirmUser = false;
  try {
    await connectDB();
    const err = initializeErrors();
    const credentials = getCredentials(formData);
    const result: any = userSchema.safeParse(credentials);
    if (!result.success) {
      err.zod = result.error.errors[0].message;
      console.log(result.error.errors);
      return err;
    }
    if (passwordValidation(credentials.password) === false) {
      err.password = true;
      return err;
    }
    const existingUser = await Users.findOne({ email: credentials.email });
    if (!existingUser) {
      credentials.password = await bcrypt.hash(credentials.password, salt);
      await Users.create(credentials);
      confirmUser = true;
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
  let userStatus: string;
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

    const clientSecret = new TextEncoder().encode(process.env.SECRET);
    const adminSecret = new TextEncoder().encode(process.env.ADMIN_SECRET);
    const oneDay = 24 * 60 * 60 * 1000;
    const alg = 'HS256';
    const userInfo = {
      id: existingUser.id,
      email: existingUser.email,
      firstName: existingUser.firstName,
      admin: existingUser.admin,
    };
    const jwt = await new SignJWT(userInfo).setProtectedHeader({ alg }).sign(clientSecret);
    cookies().set({ name: 'auth', value: jwt, expires: Date.now() + oneDay, httpOnly: true });
    if (userInfo.admin === true) {
      userStatus = 'admin';
      const jwt = await new SignJWT(userInfo).setProtectedHeader({ alg }).sign(adminSecret);
      cookies().set({
        name: 'admin',
        value: jwt,
        expires: Date.now() + oneDay,
        httpOnly: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
  if (userStatus === 'admin') {
    console.log('hello there');
    redirect('../admin');
  } else {
    redirect('/profile');
  }
}

export async function handleLogout() {
  const clientCookie = cookies().get('auth');
  const adminCookie = cookies().get('admin');

  if (clientCookie) {
    cookies().delete('auth');
    console.log('admin logged out successfully');
  }
  if (adminCookie) {
    cookies().delete('admin');
    console.log('admin logged out successfully');
  }
  redirect('/login');
}
