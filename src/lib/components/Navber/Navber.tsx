"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navber() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-6 py-3 shadow-lg">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">

        {/* Left Menu */}
        <div className="flex items-center space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/found" className="hover:text-gray-300">About</Link>
          <Link href="/perallal" className="hover:text-gray-300">PerallalRoute</Link>
          <Link href="/perallal/test" className="hover:text-gray-300">Test</Link>
        </div>

        {/* Right Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Empty Space */}
        <div className="hidden md:block"></div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-3 space-y-3 text-lg bg-gray-900 p-4 rounded">
          <Link href="/" className="block hover:text-gray-300">Home</Link>
          <Link href="/about" className="block hover:text-gray-300">About</Link>
          <Link href="/found" className="block hover:text-gray-300">FoundItems</Link>
        </div>
      )}
    </nav>
  );
}
