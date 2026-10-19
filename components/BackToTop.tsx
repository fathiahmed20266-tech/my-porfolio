"use client";

import { useEffect, useState } from "react";

/** Appears after a reasonable scroll distance and returns to the top of the page. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > 480);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <a
      href="#top"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      aria-label="العودة إلى الأعلى"
    >
      <span aria-hidden="true">↑</span>
    </a>
  );
}
