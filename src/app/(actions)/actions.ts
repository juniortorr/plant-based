'use server';

import passwordValidation from '../lib/validators';
import { v4 as uuidv4 } from 'uuid';
import connectDB from '../../../config/db';
import Users from '../lib/models';
import { RedirectType, redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { userSchema } from '../lib/validators';
import { getCredentials, initializeErrors, getUserInfo } from '../lib/credentials-helpers';
import { authenticate, decryptJWT } from '../lib/auth';

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
    const userInfo = getUserInfo(existingUser);
    userStatus = await authenticate(userInfo, userStatus);
  } catch (e) {
    console.log(e);
  }
  userStatus === 'admin' ? redirect('../admin') : redirect('/profile');
}

export async function handleLogout() {
  const clientCookie = cookies().get('auth');
  const adminCookie = cookies().get('admin');

  if (clientCookie) {
    cookies().delete('auth');
    console.log('client logged out successfully');
  }
  if (adminCookie) {
    cookies().delete('admin');
    console.log('admin logged out successfully');
  }
  redirect('/login');
}

export async function handleDeleteClient(blog) {
  try {
    await connectDB();
    const payload = await decryptJWT();
    const user = await Users.findOne({ id: payload.id }).populate('savedBlogs');
    user.savedBlogs = user.savedBlogs.filter((b) => b.id !== blog.id);
    await user.save();
    console.log('success');
  } catch (e) {
    console.log(e);
  }
}

const saveBlog = async (blog) => {
  'use server';
  try {
    await connectDB();
    const payload = await decryptJWT();
    const user = await Users.findOne({ id: payload.id }).populate('savedBlogs');
    await user.savedBlogs.map((post, index) => {
      if (post.id === blog.id) {
        throw new Error('matching blog!');
      }
    });
    user.savedBlogs = [...user.savedBlogs, blog._id];
    await user.save();
    console.log('success!');
  } catch (e) {
    console.log(e);
    return;
  }
};

export { saveBlog };
