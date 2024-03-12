import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { redirect } from 'next/navigation';

export default async function Profile() {
  const secret = new TextEncoder().encode(process.env.SECRET);
  const getUserInfo = async () => {
    try {
      const token = cookies().get('auth');
      const { payload } = await jwtVerify(token.value, secret);
      console.log('payload', payload);
      return payload;
    } catch (e) {
      console.log('Payload Client Error:', e);
      redirect('/login');
    }
  };

  const userInfo = await getUserInfo();

  return <h1>hello {userInfo.email} </h1>;
}
