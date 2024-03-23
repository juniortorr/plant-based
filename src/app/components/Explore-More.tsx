import Link from 'next/link';

const ExploreMore = async () => {
  return (
    <article className="flex max-w-sm flex-col items-center bg-tan p-10">
      <h3 className="text-2xl font-bold italic">
        Explore More<br></br> Topics Here!
      </h3>
      <div className="w-4/5">
        <p className="mt-4 font-bold">Checkout our blog to:</p>
        <ul className="ml-3 list-disc">
          <li>Learn more about why we believe in plant-based living.</li>
          <li>Find plant-based reciples</li>
          <li>Find our personal reviews on new vegan products</li>
        </ul>
      </div>
      <Link
        className="mt-10 flex h-10 w-2/3 items-center justify-center bg-green text-white hover:bg-white hover:text-green transition-all duration-150 ease-linear"
        href={'/blogs'}
      >
        Checkout Blog
      </Link>
    </article>
  );
};

export default ExploreMore;
