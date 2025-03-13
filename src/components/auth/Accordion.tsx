"use client";

import React, { useState } from "react";
import data from "../../../Data/data";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (currentIndex: any) => {
    setActiveIndex(currentIndex === activeIndex ? null : currentIndex);
  };

  return (
    <section className="text-white flex flex-col items-center justify-center w-full h-full gap-8 md:gap-16 border-b-[7px] border-gray-700 ">
      <h1 className="pt-14 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-col gap-4 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto md:px-4 ">
        {data?.length > 0 ? (
          data.map((dataItems) => (
            <div key={dataItems.id}>
              <div
                onClick={() => handleAccordionClick(dataItems.id)}
                className="flex justify-between px-4 md:px-8 lg:px-12 py-4 md:py-6 bg-[#2D2D2D] relative cursor-pointer"
              >
                <p className="text-lg md:text-xl">{dataItems.header}</p>
                {activeIndex === dataItems.id ? (
                  <IoIosArrowUp className="fa-solid fa-xmark right-3 top-4 text-3xl md:text-4xl absolute cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="fa-solid fa-xmark right-3 top-4 text-3xl md:text-4xl absolute cursor-pointer" />
                )}
              </div>
              {activeIndex === dataItems.id ? (
                <div className="text-lg md:text-xl px-4 md:px-6 lg:px-10 bg-[#2D2D2D]">
                  <p className="px-4 md:px-8 py-4 overflow-hidden text-overflow-ellipsis">
                    {dataItems.text1}
                  </p>
                  <p className="px-4 md:px-8 py-2 overflow-hidden text-overflow-ellipsis">
                    {dataItems.text2}
                  </p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>Data not available!</div>
        )}
      </div>

      <p className="text-center text-lg md:text-xl mt-4 md:mt-8 mb-4 md:mb-12">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 pb-8 md:pb-16 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
        <Input
          className="w-full md:w-1/2 px-4 py-3 md:py-4 rounded-md bg-black border-green-700 border-[2px]"
          type="text"
          placeholder="Email address"
        />
        <Button className="w-full md:w-1/2 px-4 py-3 md:py-4 bg-red-700 rounded-md">
          Get Started
        </Button>
      </div>
    </section>
  );
}
