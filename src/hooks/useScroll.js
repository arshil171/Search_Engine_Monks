import { useState, useEffect } from 'react';

export function useScroll(threshold = 50) {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    isScrolled: false,
    scrollDirection: 'none',
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollState({
        scrollY: currentScrollY,
        isScrolled: currentScrollY > threshold,
        scrollDirection: direction,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrollState;
}
export default useScroll;
