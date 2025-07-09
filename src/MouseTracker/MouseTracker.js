import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trackerPos, setTrackerPos] = useState({ x: 0, y: 0 });

  // ... rest of the component
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures it runs once on mount and

  useEffect(() => {
    let frameId;

    const animate = () => {
      setTrackerPos((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.2, // or 0.5
        y: prev.y + (mousePosition.y - prev.y) * 0.2,
      }));
      frameId = requestAnimationFrame(animate);
    };

    animate(); // kick it off

    return () => cancelAnimationFrame(frameId); // tidy up when deps change
  }, [mousePosition]);

  return (
    <div>
      <div className="tracker">
        <div className="inner-ball"></div>
      </div>
    </div>
  );
}

export default MouseTracker;
