import Image from 'next/image';

const Achievements = async () => {
  return (
    <section className="flex flex-col items-center gap-6 bg-brown py-16 text-white">
      <h2 className="text-2xl font-bold ">Achievements</h2>
      <div className="flex flex-col items-center">
        <Image src={'/certificate.png'} alt="certificate" width={100} height={100}></Image>
        <p className="w-32 text-center">2019: Best of the Best Award</p>
      </div>
      <div className="flex gap-2.5">
        <button className="size-3 rounded-full bg-slate-300"></button>
        <button className="size-3 rounded-full bg-slate-300"></button>
        <button className="size-3 rounded-full bg-slate-300"></button>
      </div>
    </section>
  );
};

export default Achievements;
