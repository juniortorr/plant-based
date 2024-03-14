import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

export default async function check(req: NextRequest, res: NextResponse) {
  if (req.nextUrl.pathname.startsWith('/profile')) {
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
}

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const secret = new TextEncoder().encode(process.env.ADMIN_SECRET);
    try {
      const token = req.cookies.get('admin');
      await jwtVerify(token.value, secret);
      return;
    } catch (e) {
      console.log('payload error', e);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
}
