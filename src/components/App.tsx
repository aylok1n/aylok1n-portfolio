import React from 'react';
import ScrollObserver from '../utils/scrollObserver';
import Header from './Header';
import Skills from './Skills';
import Works from './Works';

const App: React.FC = () => (
  <ScrollObserver>
    <Header />
    <Skills />
    <Works />
  </ScrollObserver>
);
export default App;
