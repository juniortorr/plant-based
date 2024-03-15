import Image from 'next/image';
import './globals.css';
import { handleAddUser } from './(actions)/actions';

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl text-red-600">Home</h1>
    </main>
  );
}
