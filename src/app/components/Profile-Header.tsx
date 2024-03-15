interface User {
  id: string;
  email: string;
  firstName: string;
  admin: boolean;
}

export default async function ProfileHeader({ userInfo }) {
  return (
    <header className=" h-1/3 bg-trees-background bg-cover bg-center bg-no-repeat px-4 py-5">
      <section className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-slate-500"></div>
        <h1 className="text-lg font-bold leading-5">
          Welcome Back,<br></br> {userInfo.firstName}!
        </h1>
      </section>
    </header>
  );
}
