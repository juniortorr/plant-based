'use client';

// import { cookies } from 'next/headers';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

interface NavProps {
  color?: string;
  authorization?: any;
}

const Nav = ({ color, authorization }: NavProps) => {
  const [display, setDisplay] = useState('mobile-closed');

  const handleToggleDisplay = () => {
    display === 'mobile-closed'
      ? setDisplay(() => 'mobile-open')
      : setDisplay(() => 'mobile-closed');
  };

  const linkClasses = `font-bold text-2xl hover:scale-125 hover:underline transition-all duration-300 hover:-translate-y-1`;
  switch (display) {
    case 'desktop':
      return (
        <nav className={`${!color ? 'text-white' : color} mx-auto mt-2 flex list-none gap-5`}>
          <Link className={linkClasses} href={'/'} onClick={handleToggleDisplay}>
            Home
          </Link>
          <Link className={linkClasses} href={'/about'} onClick={handleToggleDisplay}>
            About
          </Link>
          <Link className={linkClasses} href={'/blogs'} onClick={handleToggleDisplay}>
            Blogs
          </Link>
          {!authorization.auth ? (
            <Link className={linkClasses} href={'/login'} onClick={handleToggleDisplay}>
              Login
            </Link>
          ) : (
            <Link className={linkClasses} href={'/profile'} onClick={handleToggleDisplay}>
              Profile
            </Link>
          )}

          {authorization.admin && (
            <Link className={linkClasses} href={'/admin'} onClick={handleToggleDisplay}>
              Admin
            </Link>
          )}
        </nav>
      );
    case 'mobile-closed':
      return (
        <Image
          src={'/navbutton.png'}
          alt="toggle navigation button"
          height={44}
          width={44}
          className="absolute right-5 top-5 cursor-pointer"
          onClick={handleToggleDisplay}
        />
      );
    case 'mobile-open':
      return (
        <section className="absolute left-0 top-0 z-30 flex size-full items-center justify-center bg-brown">
          <button
            className="absolute right-5 top-3 text-3xl font-bold text-white"
            onClick={handleToggleDisplay}
          >
            X
          </button>
          <div>
            <nav className={`mx-auto mt-2 flex list-none flex-col gap-5 text-white`}>
              <Link className={linkClasses} href={'/'}>
                Home
              </Link>
              <Link className={linkClasses} href={'/about'}>
                About
              </Link>
              <Link className={linkClasses} href={'/blogs'}>
                Blogs
              </Link>
              {!authorization.auth ? (
                <Link className={linkClasses} href={'/login'}>
                  Login
                </Link>
              ) : (
                <Link className={linkClasses} href={'/profile'}>
                  Profile
                </Link>
              )}

              {authorization.admin && (
                <Link className={linkClasses} href={'/admin'}>
                  Admin
                </Link>
              )}
            </nav>
          </div>
        </section>
      );
  }
};

export default Nav;
