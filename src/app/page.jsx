import './globals.css';

import Header from './components/Home-Header';
import Testimonials from './components/Testimonials';
import ReadMore from './components/Read-More';
import HomeAbout from './components/Home-About';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';

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
