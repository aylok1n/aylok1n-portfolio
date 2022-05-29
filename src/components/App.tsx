import React from 'react';
import ScrollObserver from '../utils/scrollObserver';
import Header from './header';

const App: React.FC = () => (
  <ScrollObserver>
    <Header />
  </ScrollObserver>
);
export default App;
