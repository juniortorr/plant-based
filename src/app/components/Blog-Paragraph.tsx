'use client';

const BlogParagraph = ({
  paragraphContent,
  index,
  status,
  setSectionState,
  sectionState,
  sectionIndex,
  setInputStates,
  inputStates,
}) => {
  const handleChange = (e: any) => {
    const copy = inputStates.sections;
    copy[sectionIndex].paragraphs[index] = e.target.value;
    setInputStates(() => {
      return { ...inputStates, sections: copy };
    });
  };
  return (
    <textarea
      disabled={status}
      value={paragraphContent}
      id="paragraph"
      cols={30}
      rows={10}
      required
      resize-none="true"
      onChange={handleChange}
    ></textarea>
  );
};

export default BlogParagraph;
