import Link from 'next/link';

const Mission = async () => {
  return (
    <section className="mx-auto mt-10 flex w-5/6 max-w-sm flex-col gap-6 bg-green  p-12 text-white">
      <h2 className="text-2xl font-bold">
        My <br></br> Mission:
      </h2>
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat
      </p>
      <Link
        className="self-end bg-accent px-10 py-4 transition-all duration-150 ease-linear hover:bg-white hover:text-accent"
        href={'/blogs'}
      >
        Learn More
      </Link>
    </section>
  );
};

export default Mission;
