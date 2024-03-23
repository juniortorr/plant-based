'use client';
import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

const words = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat',
    from: 'Local Company',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat',
    from: 'Newest Company',
  },
];

const Testimonials = () => {
  const [displayState, setDisplayState] = useState({ data: words[0], index: 0 });
  const transitions = useTransition(displayState.data, {
    from: { transform: 'translateY(400px)' },
    enter: { transform: 'translateY(0px)' },
    leave: { transform: 'translateY(-400px)' },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      displayState.index === 1
        ? setDisplayState(() => {
            return { data: words[0], index: 0 };
          })
        : setDisplayState(() => {
            return { data: words[displayState.index + 1], index: displayState.index + 1 };
          });
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [displayState]);

  return (
    <section className="flex flex-col items-center overflow-y-hidden bg-brown p-6 text-white">
      <h2 className="mb-6 mt-8 text-3xl font-extrabold">Kind Words</h2>
      <div className="mx-auto mb-6 w-40 border-t-2  bg-slate-300"></div>
      {transitions((style, item) => {
        return (
          <animated.div style={style}>
            <div className="flex max-w-sm flex-col items-center gap-4">
              <p className="max-w-sm text-center text-lg italic leading-6">
                {displayState.data.text}
              </p>
              <p className="self-end">-{displayState.data.from}</p>
            </div>
          </animated.div>
        );
      })}

      <div className="my-6 flex gap-3">
        {words.map((entry, index) => {
          return (
            <button
              key={index}
              className="size-3 rounded-full bg-slate-300"
              onClick={() => {
                setDisplayState(() => {
                  return { data: words[index], index: index };
                });
              }}
            ></button>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
