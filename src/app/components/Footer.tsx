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
        <button className="bg-accent px-4 py-1 hover:bg-white hover:text-green transition-all duration-150 ease-linear">
          Sign Up
        </button>
      </div>
      <div className="flex w-24 flex-wrap justify-center gap-1 italic ">
        <Link
          className="hover:scale-105 hover:underline transition-all duration-150 ease-linear"
          href={'/'}
        >
          Home
        </Link>
        <Link
          className="hover:scale-105 hover:underline transition-all duration-150 ease-linear"
          href={'/about'}
        >
          About
        </Link>
        <Link
          className="hover:scale-105 hover:underline transition-all duration-150 ease-linear"
          href={'/blogs'}
        >
          Blogs
        </Link>
        <Link
          className="hover:scale-105 hover:underline transition-all duration-150 ease-linear"
          href={'/profile'}
        >
          Profile
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
