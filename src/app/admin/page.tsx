import ProfileHeader from '../components/Profile-Header';
import ProfileBlogs from '../components/Profile-Blogs';
import { decryptJWT } from '../lib/auth';
import Nav from '../components/Nav';

export default async function Admin() {
  const userInfo = await decryptJWT();
  return (
    <div>
      <ProfileHeader userInfo={userInfo} />

      <ProfileBlogs admin={true} />
    </div>
  );
}
