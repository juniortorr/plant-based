import ExploreMore from './Explore-More';
import HomeSignup from './Home-Signup';

const GettingStarted = async () => {
  return (
    <section className="flex flex-col items-center gap-6 bg-accent p-6">
      <h2 className="my-6 text-center text-3xl font-bold text-white">
        How to Get <br></br>Started
      </h2>
      <ExploreMore />
      <HomeSignup />
    </section>
  );
};

export default GettingStarted;
