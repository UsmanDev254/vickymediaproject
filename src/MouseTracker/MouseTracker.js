import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <div className="tracker">
        <div className="inner-ball"></div>
      </div>
    </div>
  );
};

export default MouseTracker;