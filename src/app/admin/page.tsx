import ProfileHeader from '../components/Profile-Header';
import ProfileBlogs from '../components/Profile-Blogs';
import { decryptJWT } from '../lib/auth';

export default async function Admin() {
  const userInfo = await decryptJWT();
  return (
    <div>
      <ProfileHeader userInfo={userInfo} />
      <ProfileBlogs admin={true} />
    </div>
  );
}
