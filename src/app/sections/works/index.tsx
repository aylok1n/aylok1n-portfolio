import React from 'react';

import ShadowImage from '../../../components/shadow-image';
import TileWrapper, {
  Tile,
  TileBackground,
  TileContent,
} from '../../../components/tile';

import { WorkBackGround, WorkContainer, WorkLeft, WorkRight } from './work';

const works = [
  {
    name: 'Приложение для фото заметок',
    repo: 'https://github.com/aylok1n/NEW-TETRADKA',
    img: 'tetradka.jpg',
  },
  {
    name: 'Верстка лендинга + pixel-perfect',
    repo: 'https://github.com/aylok1n/BEM',
    img: 'dreamshare.png',
  },
  {
    name: 'Заказ такси',
    repo: 'https://github.com/aylok1n/taxi-calling',
    img: 'taxi.png',
  },
  {
    name: 'Авторизация redux',
    repo: 'https://github.com/aylok1n/redux-authorization',
    img: 'auth.png',
  },
];

export const Works: React.FC = () => (
  <TileWrapper numOfPages={works.length + 1}>
    <TileBackground>
      <WorkBackGround />
    </TileBackground>
    {works.map(({ repo, name, img }, index) => (
      <TileContent key={`${index}-${name}`}>
        <Tile
          page={index}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-4xl font-medium tracking-tight text-center underline cursor-pointer md:text-5xl">
                  <a href={repo} rel="noreferrer" target="_blank">
                    {name}
                  </a>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <ShadowImage
                  src={`/images/${img}`}
                  alt={`${name} screenshot`}
                />
              </WorkRight>
            </WorkContainer>
          )}
        />
      </TileContent>
    ))}
    <TileContent>
      <Tile
        page={works.length}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl font-medium tracking-tight text-center md:text-5xl">
                А это вот я в: <br />
                <a
                  className="underline cursor-pointer"
                  href="https://vk.com/aylok1n"
                  rel="noreferrer"
                  target="_blank"
                >
                  vk
                </a>{' '}
                {', '}
                <a
                  className="underline cursor-pointer"
                  href="https://instagram.com/aylok1n"
                  rel="noreferrer"
                  target="_blank"
                >
                  instagram
                </a>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <ShadowImage src="/images/me.jpg" alt="me" />
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
  </TileWrapper>
);

export default Works;
