import React from 'react';
import TileWrapper, { TileBackground, TileContent, Tile } from '../Tile';
import { WorkBackGround, WorkContainer, WorkLeft, WorkRight } from './work';
import bitmaster from '../../assets/images/bitmaster.png';
import ciplay from '../../assets/images/ciplay.png';
import dreamshare from '../../assets/images/dreamshare.png';
import кабачок from '../../assets/images/123.jpg';
import ShadowImage from '../ShadowImage';

const Works: React.FC = () => (
  <TileWrapper numOfPages={4}>
    <TileBackground>
      <WorkBackGround />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl font-medium tracking-tight text-center underline cursor-pointer md:text-5xl">
                <a
                  href="https://aylok1n.github.io/BEM/"
                  rel="noreferrer"
                  target="_blank"
                >
                  DREAMSHARE landing
                </a>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <ShadowImage
                src={dreamshare}
                alt="dreamshare test case screenshot"
                width={828}
                height={1792}
              />
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
    <TileContent>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl font-medium tracking-tight text-center underline cursor-pointer md:text-5xl">
                <a
                  href="https://aylok1n.github.io/bit-master"
                  rel="noreferrer"
                  target="_blank"
                >
                  Бит мастер тестовое задание:
                </a>
                <br />
                Заказ такси
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <ShadowImage
                src={bitmaster}
                alt="bitmaster test case screenshot"
                width={828}
                height={1792}
              />
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
    <TileContent>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl font-medium tracking-tight text-center underline cursor-pointer md:text-5xl">
                <a
                  href="https://aylok1n.github.io/ciplay"
                  rel="noreferrer"
                  target="_blank"
                >
                  CiPlay тестовое задание:
                </a>
                <br />
                Авторизация
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <ShadowImage
                src={ciplay}
                alt="ciplay test case screenshot"
                width={828}
                height={1792}
              />
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
    <TileContent>
      <Tile
        page={3}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl font-medium tracking-tight underline text-center cursor-pointer md:text-5xl">
                <a
                  href="https://vk.com/aylok1n"
                  rel="noreferrer"
                  target="_blank"
                >
                  А это вот я
                </a>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <ShadowImage
                src={кабачок}
                alt="ciplay test case screenshot"
                width={828}
                height={1792}
              />
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
  </TileWrapper>
);

export default Works;
