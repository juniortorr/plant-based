const LivePreview = ({ inputStates }) => {
  return (
    <section className="mx-auto mb-5 mt-4 flex w-5/6 max-w-sm flex-col border-2">
      <div className="flex h-1/3 w-full justify-center bg-trees-background bg-cover bg-center">
        <h2 className="flex h-1/2 items-center justify-center text-xl font-bold">
          {inputStates.title}
        </h2>
      </div>

      {inputStates.sections &&
        inputStates.sections.map((section, index) => {
          return (
            <div key={index} className="mx-auto px-5">
              <h4 className="my-4 text-center text-lg font-semibold">{section.subheading}</h4>
              {section.paragraphs.map((p, pIndex) => {
                return (
                  <p key={pIndex} className="mb-2 indent-2 last:mb-0">
                    {p}
                  </p>
                );
              })}
            </div>
          );
        })}
    </section>
  );
};

export default LivePreview;
