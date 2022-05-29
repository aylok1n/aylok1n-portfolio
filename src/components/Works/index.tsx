import React from 'react';
import TileWrapper, { TileBackground, TileContent, Tile } from '../Tile';
import { WorkBackGround, WorkContainer, WorkLeft, WorkRight } from './work';

const Works: React.FC = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackGround />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl font-medium tracking-tight md:text-5xl">
                DREAMSHARE landing
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>TODO</WorkRight>
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
              <div className="text-4xl font-medium tracking-tight md:text-5xl">
                Бит мастер тестовое задание:
                <br />
                Заказ такси
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>TODO</WorkRight>
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
              <div className="text-4xl font-medium tracking-tight md:text-5xl">
                CiPlay тестовое задание:
                <br />
                Авторизация
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>TODO</WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
  </TileWrapper>
);

export default Works;
