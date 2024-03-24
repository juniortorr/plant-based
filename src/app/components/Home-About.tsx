const HomeAbout = async () => {
  return (
    <section className="mx-auto flex max-w-sm flex-col gap-10 p-10 xl:max-w-5xl xl:flex-row xl:items-center xl:gap-24 xl:px-2">
      <div className="mx-auto h-80 w-full max-w-sm bg-red-400 xl:h-96 xl:w-1/2"></div>
      <article className="mx-auto flex flex-col gap-3 xl:w-1/2">
        <h2 className="text-center text-2xl font-bold">Hi! I&apos;m June</h2>
        <p className="text-lg italic">
           commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidat culpa qui officia deserunt mollit anim id est laborum. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </article>
    </section>
  );
};

export default HomeAbout;
