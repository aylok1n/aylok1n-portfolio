import React, { useContext, useRef } from 'react';

import { ScrollContext } from '../../../utils/scrollObserver';

import './skills.css';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const skills = [
  '- Использовал TypeScript и JavaScript (ES6+)',
  '- Большой опыт работы с React. Работал с классовыми компонентами и хуками',
  '- Работал с Redux / Toolkit / Saga, Redux - Thunk, React Query',
  '- Покрываю свой код unit-тестами с помощью Jest и React Testing Library',
  '- Пишу е2е тесты на playwright',
  '- Сборка проектов на Webpack и Vite',
  '- Опыт работы с UI - библиотеками: Tailwind, AntD, MaterialUI и styled-components',
  '- Владение HTML и CSS. Использовал SASS / SCSS',
  '- Работа на Windows/Linux/MacOS',
  '- Работал с React Native',
  '- Опыт работы с Backend на Node.js (Express / NestJS)',
  '- Адаптивная семантическая верстка HTML5 с использованием препроцессоров SCSS/SASS',
  '- Знание всех современных возможностей ES6+',
  '- Превосходное понимание Typescript',
  '- Превосходное знание фреймворка React + библиотек для хранения данных Redux',
  '- Опыт работы: React, Next.js, React Native, NodeJS, MongoDB, UI-библиотеки',
  '- Опыт работы с Git (не боюсь черипикать и решать конфликты после ребейза)',
  '- Опыт работы в команде от 10ти человек',
];

export const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = skills.length;
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
        className="flex flex-col justify-center items-center py-24 px-10 mx-auto max-w-5xl min-h-screen 
        font-medium tracking-tight md:py-28 md:text-6xl lg:py-36 lg:px-20 "
      >
        <div
          className="skillText mb-14 text-4xl lg:text-7xl"
          style={{ opacity: opacityForBlock(progress, 0) }}
        >
          Я знаю свои инструменты наизусть:
        </div>
        {skills.map((skill, index) => (
          <p
            key={`${index}-${skill}`}
            className="inline-block skillText after:content-['_'] text-2xl lg:text-4xl mb-5 float-left text-left w-full"
            style={{ opacity: opacityForBlock(progress, index + 1) }}
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
