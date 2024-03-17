import ProfileBlogs from '../components/Profile-Blogs';
import ProfileHeader from '../components/Profile-Header';
import Logout from '../components/Profile-Logout';
import { decryptJWT } from '../lib/auth';

export default async function Profile() {
  const userInfo = await decryptJWT();

  return (
    <div>
      <ProfileHeader userInfo={userInfo} />
      <ProfileBlogs email={userInfo.email} />
      <Logout />
    </div>
  );
}
