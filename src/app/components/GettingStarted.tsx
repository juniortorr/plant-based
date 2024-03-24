import ExploreMore from './Explore-More';
import HomeSignup from './Home-Signup';

const GettingStarted = async () => {
  return (
    <section className="flex flex-col items-center gap-6 bg-accent p-6 xl:py-10">
      <h2 className="my-6 text-center text-3xl font-bold text-white">
        How to Get <br></br>Started
      </h2>
      <div className="flex flex-col gap-4 xl:flex-row">
        <ExploreMore />
        <HomeSignup />
      </div>
    </section>
  );
};

export default GettingStarted;
