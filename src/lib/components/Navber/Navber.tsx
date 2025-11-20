"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navber() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-6 py-3 shadow-lg relative">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">


        <div className="flex items-center space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-gray-300">Home</Link>

          <Link href="/foundItems" className="hover:text-gray-300">Found Items</Link>
        </div>


        <div className="hidden md:block relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="text-white text-lg px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
          >
            Account
          </button>


          {dropdown && (
            <div className="absolute right-0 mt-2 bg-gray-900 rounded shadow-lg w-40 p-3 space-y-2">

              <Link href="/profile" className="block hover:text-gray-300">PROFILE</Link>
              <Link href="/profile/settings" className="block hover:text-gray-300">settings</Link>
              <Link href="/profile/create-post" className="block hover:text-gray-300">Create Post</Link>
              <button className="block text-red-700">Logout</button>
            </div>
          )}
        </div>


        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>


      {open && (
        <div className="md:hidden mt-3 space-y-3 text-lg bg-gray-900 p-4 rounded">
          <Link href="/profile" className="block hover:text-gray-300">PROFILE</Link>
          <Link href="/profile/settings" className="block hover:text-gray-300">settings</Link>
          <Link href="/profile/create-post" className="block hover:text-gray-300">Create Post</Link>
          <button className="block text-red-700">Logout</button>
        </div>
      )}
    </nav>
  );
}
