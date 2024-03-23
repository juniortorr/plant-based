'use client';

import { useState } from 'react';

const ReadMoreSlider = ({ blogs }) => {
  const [displayState, setDisplayState] = useState(null);
  const displayIndexes = [0, 1, 2];

  return (
    <>
      <div className="flex flex-col gap-6 bg-white p-6 sm:flex-row sm:gap-4">
        {blogs.map((blog, index) => {
          return (
            <article
              key={index}
              onMouseEnter={() => {
                setDisplayState(() => index);
              }}
              onMouseLeave={() => {
                setDisplayState(() => null);
              }}
              className={`flex h-64 w-80 items-center justify-center bg-accent transition-all duration-100 ease-in-out ${
                displayState === index
                  ? '-translate-y-4 scale-105'
                  : displayState === null
                  ? ''
                  : 'scale-95'
              }`}
            >
              <p className="text-xl font-bold text-white">{blog.title}</p>
            </article>
          );
        })}
      </div>
      <div className="relative flex h-2 w-1/2 justify-center rounded-2xl bg-white">
        <div
          className={`absolute  top-0 z-0 h-full w-1/3 rounded-full bg-black transition-all duration-300 ease-in-out ${
            displayState === 0
              ? 'left-0'
              : displayState === 1 || null
              ? 'left-1/3'
              : displayState === 2
              ? 'right-0'
              : ''
          }`}
        ></div>
        {displayIndexes.map((i, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setDisplayState(() => index);
              }}
              className="z-10 h-full w-1/3 rounded-2xl"
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default ReadMoreSlider;
