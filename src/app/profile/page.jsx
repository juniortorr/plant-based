import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { redirect } from 'next/navigation';
import { handleLogout } from 'src/app/(actions)/actions';
import ProfileBlogs from '../components/Profile-Blogs';
import ProfileHeader from '../components/Profile-Header';

export default async function Profile() {
  const secret = new TextEncoder().encode(process.env.SECRET);
  const getUserInfo = async () => {
    try {
      const token = cookies().get('auth');
      const { payload } = await jwtVerify(token.value, secret);
      return payload;
    } catch (e) {
      console.log('Payload Client Error:', e);
      redirect('/login');
    }
  };
  const userInfo = await getUserInfo();

  return (
    <div>
      <ProfileHeader userInfo={userInfo} />
      <ProfileBlogs email={userInfo.email} />
      <form action={handleLogout}>
        <button>Logout</button>
      </form>
    </div>
  );
}
