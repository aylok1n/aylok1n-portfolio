import React from 'react';

import ScrollObserver from '../utils/scrollObserver';

import { Header, Skills, Works } from './sections';

export const App: React.FC = () => (
  <ScrollObserver>
    <Header />
    <Skills />
    <Works />
  </ScrollObserver>
);
