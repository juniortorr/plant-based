import Nav from './Nav';
import { cookies } from 'next/headers';

interface NavWrapperProps {
  color?: string;
}

const NavWrapper = async ({ color }: NavWrapperProps) => {
  const admin = cookies().get('admin');
  const auth = Boolean(cookies().get('auth'));
  const authorization = { admin, auth };
  console.log(authorization);

  return <Nav color={color} authorization={authorization} />;
};

export default NavWrapper;
