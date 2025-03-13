"use client";
import React, { useState } from "react";
import logo from "../../../public/movieflix.png";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"}>
            <Image className="h-8 w-[100px]" src={logo} alt="MovieFlix" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              className="px-3 py-2 text-sm font-medium hover:text-gray-400"
              onClick={() => router.push("/")}
            >
              Home
            </button>
            <button
              className="px-3 py-2 text-sm font-medium hover:text-gray-400"
              onClick={() => router.push("/tvshows")}
            >
              TV Shows
            </button>
            <button
              className="px-3 py-2 text-sm font-medium hover:text-gray-400"
              onClick={() => router.push("/movies")}
            >
              Movies
            </button>
            <button
              className="px-3 py-2 text-sm font-medium hover:text-gray-400"
              onClick={() => router.push("/new&popular")}
            >
              New & Popular
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/search" className="text-[25px] hover:text-gray-400">
              <CiSearch />
            </Link>
            <button className="relative p-2 hover:text-gray-400">
              <span className="sr-only">View notifications</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>

            {/* User Avatar */}
            <div>
              <button className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-gray-400">
              <UserButton  />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          <button
            className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-700"
            onClick={() => { router.push("/"); setIsOpen(false); }}
          >
            Home
          </button>
          <button
            className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-700"
            onClick={() => { router.push("/tvshows"); setIsOpen(false); }}
          >
            TV Shows
          </button>
          <button
            className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-700"
            onClick={() => { router.push("/movies"); setIsOpen(false); }}
          >
            Movies
          </button>
          <button
            className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-700"
            onClick={() => { router.push("/new&popular"); setIsOpen(false); }}
          >
            New & Popular
          </button>
        </div>
      )}
    </nav>
  );
}
