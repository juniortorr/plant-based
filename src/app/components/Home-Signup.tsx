import Link from 'next/link';

const HomeSignup = async () => {
  return (
    <article className="flex max-w-sm flex-col  items-center bg-brown p-10 text-white">
      <h2 className="text-center text-2xl font-bold italic">
        Join the <br></br> Community
      </h2>
      <div className="mx-auto w-4/5">
        <p className="mt-4 font-bold italic">Members get access to:</p>
        <ul className="ml-3 list-disc">
          <li>Cusomized nutrition programs made just for YOU!</li>
          <li>Access to the staff calendar to schedule consultations</li>
        </ul>
      </div>

      <Link
        className="mt-10 flex h-10 w-2/3 items-center justify-center bg-green text-white hover:bg-white hover:text-green transition-all duration-150 ease-linear"
        href={'/signup'}
      >
        <button>Sign Up</button>
      </Link>
    </article>
  );
};

export default HomeSignup;
