'use server';
import { redirect } from 'next/navigation';
import { JWTPayload, SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const clientSecret = new TextEncoder().encode(process.env.SECRET);
const adminSecret = new TextEncoder().encode(process.env.ADMIN_SECRET);
const oneDay = 24 * 60 * 60 * 1000;
const alg = 'HS256';

// interface User {
//   id: string;
//   email: string;
//   firstName: string;
//   admin: boolean;
// }

export const authenticate = async (userInfo: JWTPayload, userStatus: string) => {
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
    return userStatus;
  }
};

export const decryptJWT = async () => {
  try {
    const token = cookies().get('auth');
    const { payload } = await jwtVerify(token.value, clientSecret);
    return Promise.resolve(payload);
  } catch (e) {
    console.log('Payload Client Error:', e);
    redirect('/login');
  }
};

export const verifyUser = async () => {
  const auth = cookies().get('auth');
  return Promise.resolve(auth);
};
