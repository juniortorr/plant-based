const AboutSection = async () => {
  return (
    <section className="mx-auto mt-5 flex w-5/6 max-w-sm flex-col items-center gap-10 py-14 xl:max-w-4xl xl:flex-row xl:justify-center">
      <div className="mx-auto size-80 max-w-md bg-red-500 xl:w-1/2"></div>
      <div className="xl:w-1/2">
        <h2 className="text-2xl font-bold">Hello There!</h2>
        <p className="mt-4 text-lg">
          Excepteur sint occaecat cupidatLorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidat
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
