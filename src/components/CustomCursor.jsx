import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setPosition({ x, y });

      const element = document.elementFromPoint(x, y);
      if (element) {
        const style = getComputedStyle(element);
        const bgColor = style.backgroundColor;

        const rgb = bgColor.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          const r = parseInt(rgb[0], 10);
          const g = parseInt(rgb[1], 10);
          const b = parseInt(rgb[2], 10);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          setIsDarkBackground(brightness < 128);
        }
      }
    };

    const hoverTargets = document.querySelectorAll("button, a, .cursor-hover");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovering(true));
        el.removeEventListener("mouseleave", () => setHovering(false));
      });
    };
  }, []);

  const cursorColor = isDarkBackground ? "white" : "black";
  const borderColor = cursorColor;
  const bgColor = hovering ? `${cursorColor}20` : `${cursorColor}10`;

  return (
    <>
      {/* Outer circle */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className="w-8 h-8 rounded-full transition-all duration-200"
          style={{
            border: `2px solid ${borderColor}`,
            backgroundColor: bgColor,
            transform: `translate(-50%, -50%) scale(${hovering ? 1.5 : 1})`,
          }}
        />
      </div>

      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: cursorColor,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
