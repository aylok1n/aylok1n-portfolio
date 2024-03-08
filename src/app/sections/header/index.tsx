import React, { useContext, useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { ScrollContext } from '../../../utils/scrollObserver';

const Header: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="flex sticky top-0 -z-10 flex-col justify-center items-center min-h-screen
      bg-gradient-to-bl from-gray-200 via-gray-400  to-gray-800"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover absolute w-full h-full"
      >
        <source src="/video/background.m4v" type="video/m4v; codecs=hvc1" />
      </video>
      <video
        autoPlay
        preload="metadata"
        loop
        muted
        playsInline
        className="object-cover absolute w-full h-full"
      >
        <source src="/video/background.webm" type="video/webm; codecs=vp9" />
      </video>
      <div
        className="flex flex-col flex-1 justify-center items-center p-12 font-bold text-center
      text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
      >
        <h1 className="mb-6 font-action-man text-6xl xl:text-7xl">aylok1n</h1>{' '}
        <h2 className="mb-2 text-2xl tracking-tight xl:text-3xl">
          <p>Сайт портфолио</p>
          <p>Николая Кулигина</p>
        </h2>
      </div>
      <div
        className={`z-10 grow-0 pb-20 transition-all duration-1000 md:pb-10 ${
          imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
        }`}
      >
        <BsChevronDown color="#FFFFFF" size={42} />
      </div>
    </div>
  );
};

export default Header;
