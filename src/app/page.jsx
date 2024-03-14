import Image from 'next/image';
import './globals.css';
import { handleAddUser } from './(actions)/actions';

export default function Home() {
  return (
    <main>
      <h1 className="text-red-600 text-5xl">Home</h1>
    </main>
  );
}
