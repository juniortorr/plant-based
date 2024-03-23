import NavWrapper from './Nav-Wrapper';

const Header = async () => {
  return (
    <header className="flex h-dvh flex-col items-center bg-home-bg bg-cover bg-center">
      <NavWrapper />
      <div className="absolute top-1/3 flex size-64 flex-col items-center justify-center bg-white/20">
        <h1 className="text-2xl font-bold">
          <span className="text-accent">Plant</span>-Based<br></br>
          Living.<br></br>
          Fuel Better.
        </h1>
      </div>
    </header>
  );
};

export default Header;
