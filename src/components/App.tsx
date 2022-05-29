import React from 'react';
import ScrollObserver from '../utils/scrollObserver';
import Header from './header';
import Skills from './Skills';

const App: React.FC = () => (
  <ScrollObserver>
    <Header />
    <Skills />
  </ScrollObserver>
);
export default App;
