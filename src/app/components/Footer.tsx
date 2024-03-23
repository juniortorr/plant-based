import Link from 'next/link';

const Footer = async () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 bg-green px-2 py-10 text-white">
      <p className="text-center leading-5">
        Subcribe to receive <br></br> updates on new content
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <label htmlFor="email" className="text-lg">
          Email:
        </label>
        <input type="text" id="email" name="email" />
        <button className="bg-accent px-4 py-1">Sign Up</button>
      </div>
      <div className="flex w-24 flex-wrap justify-center gap-1 italic ">
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/blogs'}>Blogs</Link>
        <Link href={'/profile'}>Profile</Link>
      </div>
    </footer>
  );
};

export default Footer;
