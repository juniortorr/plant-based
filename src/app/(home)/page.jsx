import Image from 'next/image';
import styles from './page.module.css';
import { handleAddUser } from '../actions';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
    </main>
  );
}
