'use client';

import { handleCreateBlog } from 'src/app/(actions)/admin-actions';
import { useFormState } from 'react-dom';
import { useState } from 'react';

export default function CreateBlog() {
  const [formState, formAction] = useFormState(handleCreateBlog, null);
  const [inputStates, setInputStates] = useState({ title: '', date: '', content: '' });

  const clearInputs = (e) => {
    setTimeout(() => {
      setInputStates(() => {
        return { title: '', date: '', content: '' };
      });
    }, 500);
  };

  return (
    <>
      <form action={formAction}>
        {formState}
        <label htmlFor="title">Title:</label>
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
        />
        <label htmlFor="date">Date:</label>
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
        />
        <label htmlFor="content"></label>
        <textarea
          name="content"
          id="content"
          cols={30}
          rows={10}
          onChange={(e) => {
            setInputStates(() => {
              return { ...inputStates, content: e.target.value };
            });
          }}
          value={inputStates.content}
        ></textarea>
        <button onClick={clearInputs}>Submit</button>
      </form>

      <section>
        <h1>{inputStates.title}</h1>
        <p>{inputStates.date}</p>
        <p>{inputStates.content}</p>
      </section>
    </>
  );
}
