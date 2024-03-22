import './globals.css';
import { Suspense } from 'react';
import Header from './components/Home-Header';
import Testimonials from './components/Testimonials';
import ReadMore from './components/Read-More';
import HomeAbout from './components/Home-About';
import GettingStarted from './components/GettingStarted';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Testimonials />
        <Suspense fallback={<h1>LOADING BUD</h1>}>
          <ReadMore />
        </Suspense>
        <HomeAbout />
        <GettingStarted />
      </main>
    </>
  );
}
