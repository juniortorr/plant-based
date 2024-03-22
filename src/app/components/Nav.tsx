import { cookies } from 'next/headers';
import Link from 'next/link';

interface NavProps {
  color?: string;
}

const Nav = async ({ color }: NavProps) => {
  const admin = cookies().get('admin');
  const auth = cookies().get('auth');

  return (
    <nav className={`${!color ? 'text-white' : color} absolute right-6 top-4 flex list-none gap-5`}>
      <Link href={'/'}>
        <li>Home</li>
      </Link>
      <Link href={'/about'}>
        <li>About</li>
      </Link>
      <Link href={'/blogs'}>
        <li>Blogs</li>
      </Link>
      {!auth ? (
        <Link href={'/login'}>
          <li>Login</li>
        </Link>
      ) : (
        <Link href={'/profile'}>
          <li>Profile</li>
        </Link>
      )}

      {admin && (
        <Link href={'/admin'}>
          <li>Admin</li>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
