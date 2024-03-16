export default async function SharedHeader({ title }) {
  return (
    <header className="flex h-1/3 justify-center bg-trees-background bg-cover bg-center bg-no-repeat px-6">
      <h1 className=" flex h-1/2 items-center text-center text-2xl font-bold">{title}</h1>
    </header>
  );
}
