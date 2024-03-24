export default async function BlogContent({ section }) {
  return (
    <section className="flex flex-col items-center">
      <h2 className="py-8 text-center text-xl font-bold lg:text-2xl">{section.subheading}</h2>
      {section.paragraphs.map((p, index) => {
        return (
          <p key={index} className="mb-2 max-w-2xl px-10 text-left indent-3 text-lg last:mb-0">
            {p}
          </p>
        );
      })}
    </section>
  );
}
