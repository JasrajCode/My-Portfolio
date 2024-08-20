"use client";

import { FaBars, FaXmark, FaHouse } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import Link from "next/link";

interface NavLinkItem {
  title: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  {
    title: "Technologies",
    path: "#technologies",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the navbar when the screen width is 768px or larger
  useEffect(() => {
    if (windowWidth && windowWidth >= 768) {
      setNavbarOpen(false);
    }
  }, [windowWidth]);

  return (
    <nav className="flex flex-col fixed border border-zinc-700 top-0 left-0 right-0 z-10 bg-neutral-900">
      <div className="flex container lg:py-4 flex-wrap justify-between items-center mx-auto px-4 py-2">
        {/* Home Button */}
        <Link href="/">
          <FaHouse className="h-7 w-7 text-neutral-300 hover:text-white" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaBars className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaXmark className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}

export default Navbar;
