import NavWrapper from './Nav-Wrapper';

export default async function SharedHeader({ title }) {
  return (
    <header className="flex h-1/3 flex-col items-center bg-trees-background bg-cover bg-center bg-no-repeat px-6">
      <NavWrapper color="text-black"></NavWrapper>
    </header>
  );
}
