import React, { useEffect, useRef } from 'react';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';

function CustomScrollbar({ children }) {
  const containerRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      scrollbarRef.current = new PerfectScrollbar(containerRef.current, {
        suppressScrollX: true, // Suppress horizontal scrolling
      });

      // Apply the dark violet color to the scrollbar thumb
      const thumbElement = containerRef.current.querySelector('.ps__thumb-y');
 
    }

    return () => {
      if (scrollbarRef.current) {
        scrollbarRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: 'hidden',
        position: 'relative',
        maxHeight: '100vh', 
      }}
    >
      <div style={{ paddingRight: '15px' }}></div>
      <div>{children}</div>
    </div>
  );
}

export default CustomScrollbar;
