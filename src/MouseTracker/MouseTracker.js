import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
  }, []); // Empty dependency array ensures it runs once on mount and unmount
  return (
    <div
      style={{
        position: "fixed",
        left: mousePosition.x,
        top: mousePosition.y,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "blue",
        pointerEvents: "none", // Prevents the ball from interfering with other elements
      }}
    ></div>
  );
}

export default MouseTracker;