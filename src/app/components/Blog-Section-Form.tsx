'use client';
import { useRef, useState, useEffect } from 'react';
import BlogParagraph from './Blog-Paragraph';

const SectionForm = ({ inputStates, setInputStates, sectionIndex, section }) => {
  const [sectionState, setSectionState] = useState({
    subheading: section.subheading,
    paragraphs: [''],
  });

  const [displayState, setDisplayState] = useState(false);
  const paragraphs = useRef(['']);

  const handleSubheadingChange = (e) => {
    const arr = inputStates.sections;
    arr[sectionIndex] = { ...sectionState, subheading: e.target.value };
    setInputStates(() => {
      return { ...inputStates, sections: arr };
    });
  };

  const deleteSection = () => {
    const sectionCopy = [...inputStates.sections];

    sectionCopy.splice(sectionIndex, 1);
    console.log(sectionCopy);
    setInputStates(() => {
      return {
        ...inputStates,
        sections: sectionCopy,
      };
    });
  };

  const handleSubmitSection = () => {
    setDisplayState(() => true);
    console.log(inputStates);
  };

  const toggleDisable = () => {
    setDisplayState(() => false);
  };

  return (
    <fieldset className="flex w-5/6 flex-col gap-1">
      <label htmlFor="subheading" className="font-semibold">
        Subheading:
      </label>
      <input
        name="subheading"
        type="text"
        id="subheading"
        className="h-9"
        disabled={displayState}
        key={sectionIndex}
        onChange={handleSubheadingChange}
        value={inputStates.sections[sectionIndex].subheading || ''}
      />
      <label htmlFor="paragraph" className="font-semibold">
        Paragraph(s):
      </label>

      {sectionState.paragraphs.map((p: string, index: number) => {
        return (
          <BlogParagraph
            status={displayState}
            key={index}
            paragraphs={paragraphs}
            index={index}
            sectionIndex={sectionIndex}
            setSectionState={setSectionState}
            sectionState={sectionState}
            setInputStates={setInputStates}
            inputStates={inputStates}
          />
        );
      })}
      {displayState === false && (
        <>
          <button
            type="button"
            className="mx-auto mt-2 w-5/6 rounded-md border-2 border-gray-900 py-3"
            onClick={() => {
              setSectionState(() => {
                return { ...sectionState, paragraphs: [...sectionState.paragraphs, ''] };
              });
              console.log(sectionState);
            }}
          >
            New Paragraph
          </button>
          <button
            type="button"
            className="mx-auto mt-2 w-5/6 rounded-md border-2 bg-green py-3 text-white"
            onClick={handleSubmitSection}
          >
            Confirm Section
          </button>
        </>
      )}
      {displayState === true && (
        <>
          <button
            type="button"
            onClick={toggleDisable}
            className="mt-2 h-11 border-2 border-red-500 text-red-500"
          >
            Edit Section
          </button>
          <button
            type="button"
            onClick={deleteSection}
            className="mt-2 h-11 border-2 border-red-500 text-red-500"
          >
            Delete Section
          </button>
        </>
      )}
    </fieldset>
  );
};

// Create a state for the form
// have the section have its own state that can get submitted back to the form

// if theres none, display one. have that update the paragraph property

export default SectionForm;
