import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

export default async function check(req: NextRequest, res: NextResponse) {
  const secret = new TextEncoder().encode(process.env.SECRET);
  try {
    const token = req.cookies.get('auth');
    await jwtVerify(token.value, secret);
    return;
  } catch (e) {
    console.log('payload error', e);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: '/profile',
};
