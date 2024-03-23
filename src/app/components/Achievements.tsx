'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

const Achievements = () => {
  const urls = ['/certificate.png', '/award.png', '/award-shield.png'];
  const [displayState, setDisplayState] = useState({ url: urls[0], index: 0 });
  const transitions = useTransition(displayState.url, {
    from: { transform: 'translateX(300px)' },
    enter: { transform: 'translateX(0px)' },
    leave: { transform: 'translateX(-300px)' },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayState.index === 2) {
        setDisplayState(() => {
          return { url: urls[0], index: 0 };
        });
      } else {
        setDisplayState(() => {
          return { url: urls[displayState.index + 1], index: displayState.index + 1 };
        });
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayState]);

  return (
    <section className="flex flex-col items-center gap-6 bg-brown py-16 text-white">
      <h2 className="text-2xl font-bold ">Achievements</h2>
      <div className="flex w-64 flex-col items-center overflow-x-hidden">
        {transitions((style, item) => {
          return (
            <animated.div style={style} className={'flex'}>
              <Image
                src={item}
                alt="certificate"
                width={100}
                height={100}
                className="inline"
              ></Image>
            </animated.div>
          );
        })}

        <p className="w-32 text-center">2019: Best of the Best Award</p>
      </div>
      <div className="flex gap-2.5">
        {urls.map((url, index) => {
          return (
            <button
              key={index}
              className={`size-3 rounded-full ${
                displayState.index === index ? 'bg-white' : 'bg-slate-300'
              } `}
              onClick={() => {
                setDisplayState(() => {
                  return { url: urls[index], index: index };
                });
              }}
            ></button>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
