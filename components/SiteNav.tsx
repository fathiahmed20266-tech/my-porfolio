"use client";

import { useEffect, useId, useState } from "react";
import { profile } from "@/data/profile";
import { navItems } from "@/lib/nav";

const SECTION_IDS = navItems.map((item) => item.href.slice(1));

/** Sticky in-page navigation with active-section tracking and a mobile drawer. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("profile");
  const menuId = useId();

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function onNavigate() {
    setOpen(false);
  }

  return (
    <nav className="site-nav" aria-label="أقسام الصفحة">
      <div className="flex items-center justify-between gap-4 px-[5%] py-3">
        <a href="#top" className="min-w-0 truncate font-semibold text-fg" onClick={onNavigate}>
          {profile.name}
        </a>
        <ul className="hidden items-center gap-5 text-sm lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link"
                aria-current={active === item.href.slice(1) ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn-outline px-3 py-1.5 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "إغلاق" : "القائمة"}
        </button>
      </div>
      <div id={menuId} className={`nav-drawer lg:hidden ${open ? "is-open" : ""}`}>
        <ul className="grid gap-2 border-t border-line px-[5%] py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link block py-1"
                aria-current={active === item.href.slice(1) ? "location" : undefined}
                onClick={onNavigate}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
