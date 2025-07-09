import React, { useEffect, useRef, useState } from "react";

function MouseTracker(){
  const trackerRef = useRef(null);
  const innerBallRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trackerPos, setTrackerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Slight outward movement for the inner ball
      const offsetX = (e.clientX - trackerPos.x) * 0.05;
      const offsetY = (e.clientY - trackerPos.y) * 0.05;
      if (innerBallRef.current) {
        innerBallRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        // Reset the inner ball position after a short delay
        clearTimeout(innerBallRef.current.stopTimeout);
        innerBallRef.current.stopTimeout = setTimeout(() => {
          if (innerBallRef.current) {
            innerBallRef.current.style.transform = "translate(0, 0)";
          }
        }, 100);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [trackerPos]);

  useEffect(() => {
    const animate = () => {
      setTrackerPos((prevPos) => ({
        x: prevPos.x + (mousePos.x - prevPos.x) * 0.5, // Increase the factor to 0.2
        y: prevPos.y + (mousePos.y - prevPos.y) * 0.5, // Increase the factor to 0.2
      }));
  
      if (trackerRef.current) {
        trackerRef.current.style.transform = `translate(${trackerPos.x}px, ${trackerPos.y}px)`;
      }
  
      requestAnimationFrame(animate); // Recursive animation loop
    };
  
    animate(); // Start the animation loop
  }, [mousePos]);
  

  return (
    <div>
      <div className="tracker" ref={trackerRef}>
        <div className="inner-ball" ref={innerBallRef}></div>
      </div>
    </div>
  );
};

export default MouseTracker;
