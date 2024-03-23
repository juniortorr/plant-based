import './globals.css';
import dynamic from 'next/dynamic';
import Header from './components/Home-Header';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';

const ReadMore = dynamic(() => import('./components/Read-More'));
const Testimonials = dynamic(() => import('./components/Testimonials'));
const HomeAbout = dynamic(() => import('./components/Home-About'));

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Testimonials />
        <ReadMore />
        <HomeAbout />
        <GettingStarted />
      </main>
      <Footer />
    </>
  );
}
