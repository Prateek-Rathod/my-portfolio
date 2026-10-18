import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const hoveringRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [modalHost, setModalHost] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateEnabled = () =>
      setEnabled(mediaQuery.matches && !reducedMotion.matches);
    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);
    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    const updateModalHost = () => {
      const openModal = [...document.querySelectorAll("dialog[open]")].find(
        (dialog) => dialog.matches(":modal")
      );
      setModalHost(openModal ?? null);
    };
    const modalObserver = new MutationObserver(updateModalHost);
    modalObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["open"],
      childList: true,
      subtree: true,
    });
    updateModalHost();
    return () => modalObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    document.body.dataset.customCursorActive = "true";

    const updatePosition = (event) => {
      const transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (cursorRef.current) cursorRef.current.style.transform = transform;
      if (dotRef.current) dotRef.current.style.transform = transform;

      const element = document.elementFromPoint(event.clientX, event.clientY);
      if (!element) return;

      let currentElement = element;
      while (currentElement) {
        const channels = getComputedStyle(currentElement)
          .backgroundColor.match(/\d+(?:\.\d+)?/g);
        if (channels && channels.length >= 3) {
          const alpha = channels.length > 3 ? Number(channels[3]) : 1;
          if (alpha > 0) {
            const [red, green, blue] = channels.slice(0, 3).map(Number);
            const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
            setIsDarkBackground(brightness < 128);
            return;
          }
        }
        currentElement = currentElement.parentElement;
      }
    };

    const isInteractive = (target) =>
      target instanceof Element &&
      Boolean(target.closest("a, button, input, textarea, select, .cursor-hover"));
    const handlePointerOver = (event) => {
      if (!hoveringRef.current && isInteractive(event.target)) {
        hoveringRef.current = true;
        setHovering(true);
      } else if (hoveringRef.current && !isInteractive(event.target)) {
        hoveringRef.current = false;
        setHovering(false);
      }
    };
    const handlePointerOut = (event) => {
      if (hoveringRef.current && !isInteractive(event.relatedTarget)) {
        hoveringRef.current = false;
        setHovering(false);
      }
    };

    window.addEventListener("pointermove", updatePosition);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", updatePosition);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      delete document.body.dataset.customCursorActive;
    };
  }, [enabled]);

  if (!enabled) return null;

  const cursorColor = isDarkBackground ? "white" : "black";
  const backgroundColor = hovering ? `${cursorColor}20` : `${cursorColor}10`;

  return createPortal(
    <div className="custom-cursor-layer pointer-events-none fixed inset-0 z-[2147483647] h-screen w-screen">
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
    </div>,
    modalHost ?? document.body
  );
};

export default CustomCursor;
