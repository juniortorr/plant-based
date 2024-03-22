import Nav from './Nav';

export default async function SharedHeader({ title }) {
  return (
    <header className="flex h-1/3 justify-center bg-trees-background bg-cover bg-center bg-no-repeat px-6">
      <Nav color="text-black"></Nav>
      <h1 className=" mt-3 flex h-1/2 items-center text-center text-3xl font-bold">{title}</h1>
    </header>
  );
}
