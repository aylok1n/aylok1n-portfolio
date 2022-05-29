import React, { useContext, useRef } from 'react';
import { ScrollContext } from '../../utils/scrollObserver';
import './skills.css';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="text-white bg-black">
      <div
        className="flex flex-col justify-center items-center py-24 px-10 mx-auto max-w-5xl min-h-screen text-4xl
        font-medium tracking-tight md:py-28 md:text-6xl lg:py-36 lg:px-20 lg:text-7xl"
      >
        <div className="leading-[1.15]">
          <div
            className="skillText"
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            Я знаю свои инструменты наизусть.
          </div>
          <span
            className="inline-block after:content-['_'] skillText"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Мною сделано более тысячи коммитов, во имя удовлетворения хотелок
            заказчиков, а так-же их клиентов, по всему миру.
          </span>
          <span
            className="inline-block skillText"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Разработанные мною React Native приложения, имеют более 3000 загрузок
            в Play&nbsp;Market и App&nbsp;Store
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
