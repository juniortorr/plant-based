import Nav from './Nav';

export default async function SharedHeader({ title }) {
  return (
    <header className="flex h-1/3 flex-col items-center bg-trees-background bg-cover bg-center bg-no-repeat px-6">
      <Nav color="text-black"></Nav>
      <h1 className="mt-8 text-center text-3xl font-bold">{title}</h1>
    </header>
  );
}
