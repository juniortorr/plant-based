const Header = async () => {
  return (
    <header className="flex h-dvh flex-col items-center justify-center bg-home-bg bg-cover bg-center">
      <div className="flex size-64 flex-col items-center justify-center bg-white/20">
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
