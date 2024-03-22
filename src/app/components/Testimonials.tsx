const Testimonials = async () => {
  return (
    <section className="flex flex-col items-center bg-brown p-6 text-white">
      <h2 className="mb-6 mt-8 text-3xl font-extrabold">Kind Words</h2>
      <div className="mx-auto mb-6 w-40 border-t-2  bg-slate-300"></div>
      <div className="flex max-w-sm flex-col items-center gap-4">
        <p className="max-w-sm text-center text-lg italic leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidat
        </p>
        <p className="self-end">-Local Company</p>
      </div>

      <div className="my-6 flex gap-3">
        <button className="size-3 rounded-full bg-slate-300"></button>
        <button className="size-3 rounded-full bg-slate-300"></button>
        <button className="size-3 rounded-full bg-slate-300"></button>
      </div>
    </section>
  );
};

export default Testimonials;
