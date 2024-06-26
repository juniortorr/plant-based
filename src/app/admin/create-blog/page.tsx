'use client';

import { handleCreateBlog } from 'src/app/(actions)/admin-actions';
import { useFormState } from 'react-dom';
import { useState } from 'react';
import AddSectionBtn from 'src/app/components/Add-Section-Btn';
import SectionForm from 'src/app/components/Blog-Section-Form';
import LivePreview from 'src/app/components/Live-Preview';
import { handleUpdateBlog } from 'src/app/(actions)/admin-actions';
import Link from 'next/link';

export default function CreateBlog({ blog }) {
  const formTemplate = {
    title: '',
    date: '',
    sections: [],
  };

  const [inputStates, setInputStates] = useState(blog || formTemplate);

  const clearInputs = (e) => {
    !blog
      ? setTimeout(() => {
          setInputStates(() => {
            return { title: '', date: '', sections: [] };
          });
        }, 500)
      : console.log('all is normal');
  };

  const openSectionState = () => {
    setInputStates(() => {
      return {
        ...inputStates,
        sections: [...inputStates.sections, { subheading: '', paragraphs: [''] }],
      };
    });
  };

  const handleFormSubmission = async () => {
    if (blog) {
      await handleUpdateBlog(blog, inputStates);
    } else {
      await handleCreateBlog(inputStates);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <Link href={'/admin'} className="mt-4 border-2 border-red-500 px-6 py-4 text-red-500">
        Return to Dashboard
      </Link>
      <form
        action={handleFormSubmission}
        className="mx-auto mt-4 flex w-11/12 max-w-sm flex-col items-center gap-5 bg-accent/40 py-5"
      >
        {/* {formState} */}
        <h1 className=" justify-self-start text-2xl font-bold">Create New Blog</h1>

        <fieldset className="flex w-5/6 flex-col gap-1">
          <label htmlFor="title" className="font-semibold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => {
              setInputStates(() => {
                return { ...inputStates, title: e.target.value };
              });
            }}
            value={inputStates.title}
            className="box-border h-9 border-2"
          />
          <label htmlFor="date" className="font-semibold">
            Date:
          </label>
          <input
            type="text"
            id="date"
            name="date"
            required
            onChange={(e) => {
              setInputStates(() => {
                return { ...inputStates, date: e.target.value };
              });
            }}
            value={inputStates.date}
            className="box-border h-9 border-2"
          />
        </fieldset>

        <div className="h-1 w-1/2 bg-gray-500"></div>

        {inputStates.sections &&
          inputStates.sections.map((section, index) => {
            return (
              <SectionForm
                sectionIndex={index}
                inputStates={inputStates}
                setInputStates={setInputStates}
                key={index}
                section={section}
              />
            );
          })}

        <AddSectionBtn openSectionState={openSectionState} />

        {blog ? (
          <button onClick={clearInputs} className="h-11 w-5/6 bg-green text-white">
            Update
          </button>
        ) : (
          <button onClick={clearInputs} className="h-11 w-5/6 bg-green text-white">
            Submit
          </button>
        )}
      </form>

      <LivePreview inputStates={inputStates} />
    </div>
  );
}
