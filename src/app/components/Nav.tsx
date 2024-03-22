import { cookies } from 'next/headers';
import Link from 'next/link';

interface NavProps {
  color?: string;
}

const Nav = async ({ color }: NavProps) => {
  const admin = cookies().get('admin');
  const auth = cookies().get('auth');

  const linkClasses = `hover:scale-125 hover:underline transition-all duration-300 hover:-translate-y-1`;

  return (
    <nav className={`${!color ? 'text-white' : color} mx-auto mt-2 flex list-none gap-5`}>
      <Link className={linkClasses} href={'/'}>
        <li>Home</li>
      </Link>
      <Link className={linkClasses} href={'/about'}>
        <li>About</li>
      </Link>
      <Link className={linkClasses} href={'/blogs'}>
        <li>Blogs</li>
      </Link>
      {!auth ? (
        <Link className={linkClasses} href={'/login'}>
          <li>Login</li>
        </Link>
      ) : (
        <Link className={linkClasses} href={'/profile'}>
          <li>Profile</li>
        </Link>
      )}

      {admin && (
        <Link className={linkClasses} href={'/admin'}>
          <li>Admin</li>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
