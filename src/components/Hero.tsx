"use client";

import Image from "next/image";

import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-48 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Analyse your ting like never before!
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your analytics with our effortless bando checker.
        </p>

        <CustomButton
          containerStyles="bg-hot-pink text-white rounded-full mt-10"
          handleClick={handleScroll}
        >
          <span>Come on G</span>
        </CustomButton>
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] -mt-16 xl:h-full h-[590px] z-0">
          <Image src="/hero.webp" alt="hero" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
