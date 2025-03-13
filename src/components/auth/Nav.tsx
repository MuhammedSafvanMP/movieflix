import React from "react";
import { Button } from "../ui/button";
import logo from "../../../public/movieflix.png";
import Image from "next/image";
import { LanguageMenu } from "./LangaugeMenu";
import { SignInButton } from "@clerk/nextjs";

export default function Nav() {
  return (
    <nav className="w-full  px-3 sm:px-6 py-3 ">
      <div className="flex items-center justify-between ">
        {/* Smaller Logo */}
        <Image
          src={logo}
          className="w-[90px] sm:w-[110px] md:w-[130px] h-auto"
          alt="Movieflix"
        />

        {/* Right Section: Language + Login Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageMenu />
          <SignInButton mode="modal">
            <Button className="bg-red-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
              Login
            </Button>
          </SignInButton>
        </div>
      </div>
    </nav>
  );
}
