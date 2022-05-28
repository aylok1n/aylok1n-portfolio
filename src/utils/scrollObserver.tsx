import React, { useCallback, useEffect, useState } from 'react';

interface ScrollValue {
  scrollY: number;
}

export const ScrollContex = React.createContext<ScrollValue>({
  scrollY: 0,
});

type Props = {
  children?: React.ReactNode;
};

const ScrollObserver: React.FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ScrollContex.Provider value={{ scrollY }}>
      {children}
    </ScrollContex.Provider>
  );
};

export default ScrollObserver;
