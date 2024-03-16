import { handleLogout } from '../(actions)/actions';

export default async function Logout() {
  return (
    <form action={handleLogout} className="text-center">
      <button className="my-6 h-12 w-60 bg-red-500 text-white transition duration-300 ease-linear hover:border-2 hover:border-red-700 hover:bg-white hover:text-red-700">
        Logout
      </button>
    </form>
  );
}
