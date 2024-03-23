import NavWrapper from './Nav-Wrapper';

interface User {
  id: string;
  email: string;
  firstName: string;
  admin: boolean;
}

const ProfileHeader = async ({ userInfo }) => {
  return (
    <header className=" flex h-1/3 flex-col items-center bg-trees-background bg-cover bg-center bg-no-repeat px-4 py-1">
      <NavWrapper color="text-black" />
      <section className="mt-5 flex items-center gap-3 self-start">
        <div className="size-12 rounded-full bg-slate-500"></div>
        <h1 className="text-lg font-bold leading-5">
          Welcome Back,<br></br> {userInfo.firstName}!
        </h1>
      </section>
    </header>
  );
};

export default ProfileHeader;
