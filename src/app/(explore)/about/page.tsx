import SharedHeader from 'src/app/components/Header-Shared';
import Footer from 'src/app/components/Footer';
import Mission from 'src/app/components/Mission';
import AboutSection from 'src/app/components/About';
import Achievements from 'src/app/components/Achievements';

export default function About() {
  return (
    <>
      <SharedHeader title={'About Me'} />
      <main>
        <Mission />
        <AboutSection />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
