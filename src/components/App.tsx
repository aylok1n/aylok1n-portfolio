import React from 'react';
import ScrollObserver from '../utils/scrollObserver';
import AboutMe from './aboutMe';
import Header from './header';

const App: React.FC = () => (
  <ScrollObserver>
    <Header />
    <AboutMe />
  </ScrollObserver>
);
export default App;
