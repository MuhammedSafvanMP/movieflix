import React, { use } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import BannerImg from "@/../public/header-image.png";
import Image from "next/image";
import Nav from "./Nav";
import Accordion from "./Accordion";
import Shows from "./Shows";
import Watch from "./Watch";
import Offline from "./Offline";
import Kids from "./Kids";
import Footer from "./Footer";

export default function LoginPage() {
  return (
    <div className="grid gap-11 max-h-full bg-black">
      <div className="bg-black bg-linear-to-bl from-black to-black flex items-center justify-center relative">
        <Image className="h-[80vh] w-full" src={BannerImg} alt="Banner_image" />
        <div className="absolute top-0 w-[100%]">
          <Nav />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"> */}
        <div className="absolute flex items-center flex-col gap-5 text-white ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-6xl font-bold text-">
            Unlimited movies, TV shows, and more
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Watch anywhere. Cancel anytime.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 pb-8 md:pb-16 w-full md:w-[80%] lg:w-[60%] xl:w-[60%] mx-auto">
          <Input placeholder="Email address" className="text-black outline-none focus:outline-none"  />
            <Button className="w-full md:w-1/2 px-4 py-3 md:py-4 bg-red-700 rounded-md">Get Start</Button>
          </div>
        </div>
      </div>

      <Shows />
      <Offline />
      <Watch />
      <Kids />

      <div className="w-[100%] text-white flex items-center justify-center">
        <Accordion />
      </div>
      <Footer />
    </div>
  );
}
