import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const hoveringRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches);
    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);
    return () => mediaQuery.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const updatePosition = (event) => {
      const transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (cursorRef.current) cursorRef.current.style.transform = transform;
      if (dotRef.current) dotRef.current.style.transform = transform;

      const element = document.elementFromPoint(event.clientX, event.clientY);
      if (!element) return;

      const backgroundColor = getComputedStyle(element).backgroundColor;
      const channels = backgroundColor.match(/\d+(?:\.\d+)?/g);
      if (!channels || channels.length < 3) return;

      const [red, green, blue] = channels.slice(0, 3).map(Number);
      const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
      setIsDarkBackground(brightness < 128);
    };

    const updateHover = (event, isHovering) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("a, button, input, textarea, select, .cursor-hover")) {
        hoveringRef.current = isHovering;
        setHovering(isHovering);
      }
    };
    const handlePointerOver = (event) => updateHover(event, true);
    const handlePointerOut = (event) => updateHover(event, false);

    window.addEventListener("pointermove", updatePosition);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", updatePosition);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  const cursorColor = isDarkBackground ? "white" : "black";
  const backgroundColor = hovering ? `${cursorColor}20` : `${cursorColor}10`;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-transform duration-150 ease-out"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
        aria-hidden="true"
      >
        <div
          className="h-8 w-8 rounded-full transition-all duration-200"
          style={{
            border: `2px solid ${cursorColor}`,
            backgroundColor,
            transform: `translate(-50%, -50%) scale(${hoveringRef.current || hovering ? 1.5 : 1})`,
          }}
        />
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
        aria-hidden="true"
      >
        <div
          className="h-2 w-2 rounded-full"
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
