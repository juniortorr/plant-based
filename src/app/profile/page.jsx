import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { redirect } from 'next/navigation';
import { handleLogout } from 'src/app/(actions)/actions';

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
    <div className=" bg-slate-700">
      <header className=" h-1/3 bg-trees-background bg-contain bg-center bg-no-repeat">
        <section>
          <h1>Welcome Back, {userInfo.firstName}!</h1>
        </section>
      </header>

      <form action={handleLogout}>
        <button>Logout</button>
      </form>
    </div>
  );
}
