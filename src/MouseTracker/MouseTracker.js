import React, { useEffect, useRef } from "react";

const SMOOTHING = 0.15;              // 0.15 ≈ 150 ms lag

function MouseTracker() {
  const trackerRef   = useRef(null);          // the dot that follows the mouse
  const targetPosRef = useRef({ x: 0, y: 0 }); // where the mouse is now
  const smoothPosRef = useRef({ x: 0, y: 0 }); // where the dot is now

  useEffect(() => {
    // --- update target position on mousemove -------------------------
    const handleMouseMove = (e) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // --- animation loop ---------------------------------------------
    let frameId;
    const animate = () => {
      const target = targetPosRef.current;
      const current = smoothPosRef.current;

      // linear interpolation toward the mouse
      current.x += (target.x - current.x) * SMOOTHING;
      current.y += (target.y - current.y) * SMOOTHING;

      // move the element
      if (trackerRef.current) {
        trackerRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      frameId = requestAnimationFrame(animate);
    };
    animate();

    // --- cleanup on unmount -----------------------------------------
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={trackerRef} className="tracker">
      <div className="inner-ball" />
    </div>
  );
}

export default MouseTracker;
