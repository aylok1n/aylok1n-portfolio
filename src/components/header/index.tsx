import React, { useCallback, useContext, useRef, useState } from 'react';
import { ScrollContext } from '../../utils/scrollObserver';
import background from '../../assets/video/background.m4v';
import backgroundWebm from '../../assets/video/background.webm';
import IconDown from '../../assets/images/icon-arrow-down.png';

const Header: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="flex sticky top-0 -z-10 flex-col justify-center items-center min-h-screen"
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
        <source src={background} type="video/m4v; codecs=hvc1" />
      </video>
      <video
        autoPlay
        preload="metadata"
        loop
        muted
        playsInline
        className="object-cover absolute w-full h-full"
      >
        <source src={backgroundWebm} type="video/webm; codecs=vp9" />
      </video>
      <div
        className="flex z-10 flex-col flex-1 justify-center items-center p-12 font-bold text-center
      text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
      >
        <h1 className="mb-6 text-4xl xl:text-5xl">AYLOK1N</h1>
        <h2 className="mb-2 text-2xl tracking-tight xl:text-3xl">
          <span>Сайт портфолио</span>
        </h2>
      </div>
      <div
        className={`z-10 grow-0 pb-20 transition-all duration-1000 md:pb-10 ${
          imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
        }`}
      >
        <img
          src={IconDown}
          alt="scroll"
          width={128 / 3}
          height={128 / 3}
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Header;
